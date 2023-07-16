import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { PROJECTS_QUERY } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../../utils/mutations";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { async } from "regenerator-runtime";

const ProjectForm = ({ userId }) => {
    const [modalShow, setModalShow] = useState(false);
    const [name, setName] = useState('');
    const [createProject, { data }] = useMutation(CREATE_PROJECT,{
        refetchQueries: [
            {
              query: PROJECTS_QUERY,
              variables: { userId },
            },
        ],
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProject({ variables: { name, userId } });
            setModalShow(false);
            setName('');
            
        } catch (error) {
            console.error('failed to create project',error);
        }
    };

    return (
        <>
        <Button onClick={()=> setModalShow(true)}className="buttons">
            Add Project
        </Button>

        <Modal
        show={modalShow}
        onHide={()=> setModalShow(false)}
        backdrop="static"
        keyboard={false}
        >
         <Modal.Header closeButton>
            <Modal.Title>Create Project</Modal.Title>
            </Modal.Header> 
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Project Name:</Form.Label>
                    <Form.Control
                    type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                    />
                    </Form.Group>
                    <Button type="submit">
                        Create
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

        </>
    );
};

export default ProjectForm
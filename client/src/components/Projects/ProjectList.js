import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { PROJECTS_QUERY } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../../utils/mutations";
import { Container, Row, Col, Button } from "react-bootstrap";

const ProjectList = ({userId}) => {
    const {loading, error, data, refetch} = useQuery(PROJECTS_QUERY, {
        variables: {userId},
    });

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      console.log(error);
      return <div>Error! {error.message}</div>;
    }

    return (
        <Container>
            <Row>
                <Col>
                <Button className="buttons">Add Project</Button>
                    <div>
                        {data && data.projects && data.projects.map(project => (
                          <div key={project._id}>
                            <h2>{project.name}</h2>
                          </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectList;
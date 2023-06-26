import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import MyNav from "../components/Navigation/Nav";
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const RegisterForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');

    const [createUser] = useMutation(CREATE_USER);
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await createUser({
                variables: { name, email, password, role }
            });
            Auth.login(data.createUser.token);
            props.onSuccess();
            console.log('user created successfully')
        } catch (error) {
            console.error('Error creating user', error);
          
        }
    }

    return (
        <>
            <MyNav>
            </MyNav>
            <Container>
            <Row className="signup-container">
          <Col>
            <Form className="mt-4" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter Email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>EnterPassword</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter Password"
                    />
                </Form.Group>

                <Button className="buttons" variant="" type="submit">
                    Register
                </Button><br/>
                <Form.Text className="signup-link" as={Link} to='/login'>
                  Already have an account? <br/>
                  </Form.Text>
            </Form>
            </Col>
        </Row>
            </Container>
        </>
    );
}

export default RegisterForm
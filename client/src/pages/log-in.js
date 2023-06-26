import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../utils/mutations";
import AuthService from "../utils/auth";
import MyNav from "../components/Navigation/Nav";
import {Link} from 'react-router-dom'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './log-in.module.css';


const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signIn] = useMutation(SIGN_IN);
    const [isLoggedIn, setIsLoggedIn] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log('submitting form...');
        try{
            const {data} = await signIn({variables: {email, password}});
            AuthService.login(data.signIn.token);
            setIsLoggedIn(true);
            props.onSuccess()
            console.log('Welcome!');
        } catch (err) {
            console.error(err);
            setErrorMessage("Incorrect email or password");
        }
    }
    
    return (
      <>
      <MyNav></MyNav>
        <Container className="">
        <Row className="login-container">
          <Col>
            <div className="login-page">
              <Form className="my-4 mx-3" onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mt-3 mb-2">Email address</Form.Label>
                  <Form.Control
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPassword">
                  <Form.Label className="mt-2 mb-1">Password</Form.Label>
                  <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <Button variant="" type="submit" className="mt-2 buttons">
                  Login
                </Button> <br/>
                <Form.Text className="signup-link" as={Link} to='/signup'>
                  New to ConstructDaily? <br/>
                  Sign up now
                </Form.Text>
              </Form>
            </div>
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
      </>
    );
}

export default LoginForm
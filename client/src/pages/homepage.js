import React from 'react';
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const HomePage = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col md={8}>
                    <h1 className='title'>Construct Daily</h1>
                </Col>
                <Col md={4} className="text-md-right">
                    <Button>Log In</Button>
                    <Button>Register</Button>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default HomePage
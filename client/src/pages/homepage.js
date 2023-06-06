import React from 'react';
import { Container, Row, Col, Image, Button, Nav, Navbar } from "react-bootstrap";
import Logo from "../images/ConstructDaily.png";
import HomepageImg from "../images/home image.png";

const HomePage = () => {
    return (
        <>
            <Navbar expand="lg" className="nav-container">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            width="200"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div
                            className="d-flex justify-content-between"
                            style={{ width: "100%" }}
                        >
                            <Nav className="ms-auto">
                                <Button
                                    className='buttons'
                                    href='/login'
                                >
                                    Log In
                                </Button>
                                <Button
                                    className='buttons'
                                    href='/register'
                                >
                                    Register
                                </Button>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div style={{ overflow: 'hidden' }}>
                <Row className="no-margin">
  <Col md={12} style={{ position: 'relative' }}>
    <Image
      src={HomepageImg}
      style={{ width: '100%', height: '800px', objectFit: 'cover' }}
      alt="React Bootstrap logo"
    />
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a semi-transparent black background
      padding: '20px',
      borderRadius: '10px'
    }}>
      <h1>Make it easier to manage your projects</h1>
      <p>
        Unlock Construction Success with Daily Logs: Enhance project efficiency, streamline communication,
        and boost accountability with our intuitive daily logging solution.
        Stay on top of progress, track milestones, and mitigate risks effortlessly.
        Experience seamless collaboration, improved documentation, and the power to make informed decisions in real-time.
      </p>
    </div>
  </Col>
</Row>

                
            </div>
        </>
    )
}

export default HomePage
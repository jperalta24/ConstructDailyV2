import { useState } from "react";
import Auth from "../../utils/auth";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../images/ConstructDaily.png";

function MyNav() {
    const location = useLocation(); // use location hook allows you to access the current url
   
    const navigate = useNavigate();
    
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
        navigate('/')
    }

    return (
        <Navbar expand="lg" className="nav-container">
            <Container>
                <Navbar.Brand as={Link} to="/">
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
                            {Auth.loggedIn() ? (
                                <>
                                    <Button as={Link} to="/profile" className="buttons" variant="custom" size="lg">
                                        Profile
                                    </Button>
                                    <Button as={Link} to="/" className="buttons" variant="custom" border="primary" size="lg">
                                        Home Page
                                    </Button>
                                    <Button className="buttons" variant="custom" size="lg" onClick={logout}>
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    {location.pathname !== "/" && (
                                        <Button as={Link} to="/" className="buttons" variant="custom" size="lg">
                                            Home Page
                                        </Button>
                                    )}
                                    <Button as={Link} to="/signup" className="buttons" variant="custom" size="lg">
                                        Signup
                                    </Button>
                                    <Button as={Link} to="/login" className="buttons" variant="custom" size="lg">
                                        Login
                                    </Button>
                                </>
                            )}
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;

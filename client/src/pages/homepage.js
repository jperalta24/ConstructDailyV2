import React from 'react';
import { Container, Row, Col, Image, Button, Nav, Navbar } from "react-bootstrap";
import Logo from "../images/ConstructDaily.png";
import MyNav from '../components/Navigation/Nav';
import HomepageImg from "../images/home image.png";

const HomePage = () => {
    return (
        <>
        <MyNav>
            
        </MyNav>

            <div style={{ overflow: 'hidden' }}>
                <Row className="no-margin">
  <Col md={12} style={{ position: 'relative' }}>
    <Image
      src={HomepageImg}
      style={{ width: '100%', height: '800px', objectFit: 'cover', }}
      alt="React Bootstrap logo"
    />
    <div className='' style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a semi-transparent black background
      padding: '20px',
      borderRadius: '10px'
    }}>
      <h1 className='homepage-text'>Make it easier to manage your projects</h1>
      <p className='homepage-text'>
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
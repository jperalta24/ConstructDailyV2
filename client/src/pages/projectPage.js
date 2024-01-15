import React from 'react';
import { Container, Row, Col, Image, Button, Nav, Navbar } from "react-bootstrap";
import MyNav from '../components/Navigation/Nav';
import DailyLogForm from '../components/DailyLogs/DailyLogForm';
import { useParams } from 'react-router-dom';

const ProjectPage = (projectId)=>{
    const { id } = useParams(); // 'id' should match the parameter name in the route path
    return(
        <>
        <MyNav>

        </MyNav>

        <Container>
            <Row>
                <Col>
                <DailyLogForm>

                </DailyLogForm>
                </Col>
            </Row>
        </Container>
        </>

    )
}

export default ProjectPage
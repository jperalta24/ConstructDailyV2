import React from 'react';
import { Container, Row, Col, Image, Button, Nav, Navbar } from "react-bootstrap";
import MyNav from '../components/Navigation/Nav';
import DailyLogForm from '../components/DailyLogs/DailyLogForm';

const ProjectPage = ()=>{
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
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Container, Row, Col } from "react-bootstrap";
import ProjectList from "../Projects/ProjectList";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import ProjectForm from "../Projects/ProjectForm";
import MyNav from "../Navigation/Nav";

const UserProfile = () => {
    const { name: userParam } = useParams();

    const { loading, data,} = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { name: userParam },
        onCompleted: (queryData) => {
            console.log(queryData);
        }
    });

    const user = data?.me || data?.user || {};
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.name) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }

    return (
        <>
            <MyNav></MyNav>
        <Container>
            <Row>
                <Col>
                {/* charAt() method to get the first character of the string, and the slice() method to get the rest of the string. Then you can capitalize the first letter using the toUpperCase() method, and make sure the rest of the string is in lower case with the toLowerCase() method. */}
                <h2 className="profile-title">{Auth.getProfile().data.name.charAt(0).toUpperCase() + Auth.getProfile().data.name.slice(1).toLowerCase()}'s Profile</h2>
                </Col>
            </Row>
            <Row>
                <Col><ProjectForm userId={user._id}></ProjectForm>
                <ProjectList projects = {data.projects}></ProjectList>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default UserProfile
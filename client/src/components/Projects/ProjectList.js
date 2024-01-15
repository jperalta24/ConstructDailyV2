import React, { useState } from "react";
import { useNavigate} from 'react-router-dom'
import { useQuery } from "@apollo/client";
import { PROJECTS_QUERY } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../../utils/mutations";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectPage from "../../pages/projectPage";

const ProjectList = ({ userId }) => {
  const { loading, error, data, refetch } = useQuery(PROJECTS_QUERY, {
    variables: { userId },
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProjectId, setActiveProjectId] = useState(null); // Add this state

  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    navigate(`/project/${projectId}`);
    console.log(projectId)
  }

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
          <h2 id="project-title">Projects</h2>
          <div>
            {data && data.projects && data.projects.map(project => (
              <div key={project._id}>
                <Button 
                  className="project-list" 
                  variant="link" 
                  onClick={() => handleProjectClick(project._id)}>
                  <h3  className="project-list">{project.name}</h3>
                </Button>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectList;
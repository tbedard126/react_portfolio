import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
// import { List  ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import {
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const technologies = [
  { icon: faHtml5, text: "HTML 5" },
  { icon: faCss3, text: "CSS 3" },
  { icon: faJs, text: "JavaScript" },
  { icon: faNodeJs, text: "Node.js" },
  { icon: faReact, text: "React" },
  { icon: faGit, text: "Git" },
  { icon: faDatabase, text: "MongoDB" },
  { icon: faDatabase, text: "MySQL" },
  { text: "Sequelize" },
  { text: "Mongoose" },
  { text: "Express.js" },
  { text: "And many more!!" },
  // add more objects as needed
];

const Resume = () => {
  return (
    <Row className="mt-5 mb-3 ">
      <Col className="text-center">
        <Button href="/path/to/resume.pdf" download variant="primary">
          Download Resume
        </Button>
      </Col>
      <div>
        <h1 className="text-center">Technologies I Know</h1>
        <Container className="resumeContainer">
          <Row>
            {technologies.map((tech, index) => (
              <Col key={index} xs={6} md={3}>
                <p className="tech zoom">
                  <FontAwesomeIcon icon={tech.icon} size="lg" />
                  {tech.text}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Row>
  );
};

export default Resume;

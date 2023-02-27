import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import images from "./pictures";

const ImageCard = ({ image, name, repo, live, description }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img className="zoom" variant="top" src={image} />
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">{name}</Card.Title>
        <Card.Text className="cardText">{description}</Card.Text>
        <Button href={repo} target="_blank" variant="primary">
          GitHub Repo
        </Button>
        {live && (
          <Button href={live} target="_blank" variant="secondary">
            Live Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

const Projects = () => {
  return (
    <div>
      <div className="bg-dark text-white py-4">
        <Container>
          <Row className="justify-content-center">
            <h1 className="text-center">Projects</h1>
          </Row>
        </Container>
      </div>
      <div className="d-flex justify-content-center mt-1">
        <Container>
          <Row className="justify-content-center">
            {images.map((image, index) => (
              <Col md={5} className="mb-3 mx-auto image-card" key={index}>
                <ImageCard {...image} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Projects;

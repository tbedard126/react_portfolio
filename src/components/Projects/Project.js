import React from "react";
import { Card, Button } from "react-bootstrap";
import images from "./pictures";

const ImageCard = ({ image, name, repo, live, description }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
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
    <div className="d-flex justify-content-center mt-5">
      <div className="row">
        {images.map((image) => (
          <div className="col-md-4 mb-3">
            <ImageCard key={image.name} {...image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

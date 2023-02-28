import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white footer">
      <Container>
        <Row className="justify-content-center py-3">
          <Col md={6} className="text-center">
            <p className="mb-0 zoom">
              Connect with me:&nbsp;
              <a
                href="mailto:tylerbedard126@gmail.com"
                className="me-3"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
              <a
                href="https://github.com/tbedard126"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/tyler-bedard-4b39a5267/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              &copy; 2023 Tyler Bedard
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

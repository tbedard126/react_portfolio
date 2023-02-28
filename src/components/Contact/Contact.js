import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to your email address using a backend API or service
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="card border-primary p-3">
            <h1 className="text-center mb-4 contactBody">Contact Page</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" className="btn btn-primary">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

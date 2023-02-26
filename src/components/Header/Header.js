import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="justify-content-center header">
      <Container>
        <Navbar.Brand>
          <h1>Welcome!</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

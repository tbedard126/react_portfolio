import React from "react";
import { Nav } from "react-bootstrap";

const NavTabs = ({ currentPage, handlePageChange }) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <Nav variant="tabs" activeKey={currentPage} onSelect={handlePageChange}>
      {links.map((link) => (
        <Nav.Item key={link.name}>
          <Nav.Link eventKey={link.name} href={link.href}>
            {link.name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default NavTabs;

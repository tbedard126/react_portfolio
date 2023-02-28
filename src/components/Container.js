import React, { useState } from "react";
import Contact from "./Contact";
import Nav from "./Nav";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () =>
    currentPage === "Home" ? (
      <Home />
    ) : currentPage === "Contact" ? (
      <Contact />
    ) : currentPage === "Projects" ? (
      <Projects />
    ) : currentPage === "Resume" ? (
      <Resume />
    ) : null;
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* this is using the current state of the webapge, and also asinging a new state */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* this is calling the renderpage function to render our selected page */}
      {renderPage()}
    </div>
  );
}

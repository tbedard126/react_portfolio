import React, { useState } from "react";
import Contact from "./Contact";
import Nav from "./Nav";
import Home from "./Home";
import Project from "./Projects";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // TODO: Add a comment describing the functionality of this method
  // this is checking what page you are on, and rendering the correct HTML for the page
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* this is using the current state of the webapge, and also asinging a new state */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* this is calling the renderpage function to render our html pages */}
      {renderPage()}
    </div>
  );
}

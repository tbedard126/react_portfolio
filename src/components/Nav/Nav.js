import React from "react";

const NavTabs = ({ currentPage, handlePageChange }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          // this is a ternary operator, it is checking if you are on the homepage. if you are on the homepage it will render the active navlink if not the other one

          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#project"
          onClick={() => handlePageChange("Blog")}
          //  TODO: Add a comment explaining what this logic is doing
          // this is a ternary operator, it is checking if you are on the blog page. if you are on the about it will render the active navlink if not the other one

          className={currentPage === "Project" ? "nav-link active" : "nav-link"}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
          // this is the click event handeler for the contact page, this is checking if the page you are on is contact and rendering the correct page, if not renders the other
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavTabs;

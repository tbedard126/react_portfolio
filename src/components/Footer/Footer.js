import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="fixed-bottom">
        <p className="text-center">Author: Tyler Bedard</p>
        <p className="text-center">
          <a href="mailto:tylerbedard126@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </p>
        <p className="text-center">
          <a href="https://github.com/tbedard126">
            <i className="fab fa-github"></i>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

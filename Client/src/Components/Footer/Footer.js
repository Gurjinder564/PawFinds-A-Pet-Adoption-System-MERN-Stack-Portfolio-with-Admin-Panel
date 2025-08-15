import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PetHive Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach me at{" "}
          <a className="mail-links" href="mailto:gurjinders1480@gmail.com">
            gurjinders1480@gmail.com
          </a>
        </p>
        <p>
          <a
            className="contact-links"
            href="https://in.linkedin.com/in/gurjinder-singh-a92a9b2b7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square"></i> Linkedin
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://github.com/Gurjinder564"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i> GitHub
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp; &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://wa.me/6283331557?text=Hello%2C%20I'd%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp
          </a>
        </p>
        <p>&copy; 2025 Gurjinder singh</p>
      </div>
    </footer>
  );
};

export default Footer;

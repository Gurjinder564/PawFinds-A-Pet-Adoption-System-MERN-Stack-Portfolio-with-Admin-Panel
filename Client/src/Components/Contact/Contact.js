import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:gurjinders1480@gmail.com">
          gurjinders1480@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a
          class="mail-links"
          href="https://in.linkedin.com/in/gurjinder-singh-a92a9b2b7"
        >
          User Name: Gurjinder Singh
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/Gurjinder564">
          Gurjinder564
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+916283331557">
          +91 6283331557
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile" />
      </div>
    </div>
  );
};

export default Contact;

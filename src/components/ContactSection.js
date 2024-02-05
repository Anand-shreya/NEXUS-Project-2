// ContactSection.js

import React from "react";
import "./ContactSection.css"; // Import your CSS file for styling
import insta from "../images/insta.png";
import email from "../images/email.png";
import X from "../images/X.png";
const ContactSection = () => {
  return (
    <div className="contact-section-Maincontainer">
      <div className="contact-section-container">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Reach out through our social media
          channels:
        </p>
        <div className="social-links">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" />
          </a>
          <a href="mailto:info@example.com">
            <img src={email} alt="Email" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={X} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

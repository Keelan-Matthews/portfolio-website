import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-details">
        <div className="detail">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{
              color: "var(--green)",
              width: "30px",
              height: "30px",
              marginRight: "20px",
            }}
          />
          <p>Johannesburg, South Africa</p>
        </div>
        <div className="detail">
          <FontAwesomeIcon
            icon={faPhone}
            style={{
              color: "var(--green)",
              width: "30px",
              height: "30px",
              marginRight: "20px",
            }}
          />
          <a href="tel:0723330444" target="_blank">
            <p>+27 72 333 0444</p>
          </a>
        </div>
        <div className="detail">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{
              color: "var(--green)",
              width: "30px",
              height: "30px",
              marginRight: "20px",
            }}
          />
          <a href="mailto:keelanmatthews123@gmail.com" target="_blank">
            <p>keelanmatthews123@gmail.com</p>
          </a>
        </div>
      </div>
      <div className="footer-socials">
        <a href="https://github.com/Keelan-Matthews" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ width: "30px", height: "30px", margin: "10px" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/keelan-matthews-645b13201/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ width: "30px", height: "30px", margin: "10px" }}
          />
        </a>
      </div>
    </footer>
  );
};

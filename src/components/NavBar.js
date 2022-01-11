import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul className="navigation">
                <li><a href="#about-me-nav">About</a></li>
                <li><a href="#skills-nav">Skills</a></li>
                <li><a href="#projects-nav">Projects</a></li>
                <li><a href="#contact-nav">Contact</a></li>
            </ul>
            <ul className="social-links">
                <li><a href="https://github.com/Keelan-Matthews" target="_blank">
                    <FontAwesomeIcon icon={ faGithub } style={{ width: "24px", height: "24px", margin: "10px"}} />
                    <p>GitHub</p>
                </a></li>
                <li><a href="https://www.linkedin.com/in/keelan-matthews-645b13201/" target="_blank">
                    <FontAwesomeIcon icon={ faLinkedin } style={{ width: "24px", height: "24px", margin: "10px"}} />
                    <p>LinkedIn</p>
                </a></li>
                <li><a href="mailto:keelanmatthews123@gmail.com" target="_blank">
                    <div className="email-icon">
                        <FontAwesomeIcon icon={ faEnvelope } />
                    </div>
                </a></li>
            </ul>
        </nav>
    )
}

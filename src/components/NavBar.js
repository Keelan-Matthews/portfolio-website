import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul className="navigation">
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <ul className="social-links">
                <li><a href="">
                    <FontAwesomeIcon icon={ faGithub } style={{ width: "24px", height: "24px", margin: "10px"}} />
                    GitHub
                </a></li>
                <li><a href="">
                    <FontAwesomeIcon icon={ faLinkedin } style={{ width: "24px", height: "24px", margin: "10px"}} />
                    LinkedIn
                </a></li>
                <li><a href="">
                    <div className="email-icon">
                        <FontAwesomeIcon icon={ faEnvelope } />
                    </div>
                </a></li>
            </ul>
        </nav>
    )
}

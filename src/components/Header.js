import React from 'react';
import Typed from 'react-typed';
import Portrait from '../media/images/portrait.png';
import SkillWheel from '../media/svg/skill-wheel.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <header>
            <div className="main-info">
                <div className="personal-info">
                    <div className="info-wrapper">
                        <p>Hello</p>
                        <h1>I'm <span className="name-color">Keelan</span> Matthews</h1>
                        <Typed
                            className='typed-text'
                            strings={["Web Developer", "UX/UI Designer", "Graphic Designer"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                        />
                        <div className="main-buttons">
                            <a href="#" target="_blank" className="primary-button"><div>Download CV</div></a>
                            <a href="mailto:keelanmatthews123@gmail.com" target="_blank" className="secondary-button"><div>Contact Me</div></a>
                        </div>
                    </div>
                </div>
                <div className="portrait">
                    <img src={ Portrait } alt="This image is a self-portrait"  />
                </div>
            </div>
            <div className="background-shapes">
                <div id="circle-1"></div>
                <div id="circle-2"></div>
                <div id="circle-3"></div>
                <img src={ SkillWheel } id="skill-wheel" />
            </div>
            <div className="mouse-scroll">
                <FontAwesomeIcon icon={ faMouse } style={{ width: "24px", height: "24px" }} />
                <FontAwesomeIcon icon={ faAngleDown } style={{ width: "24px", height: "24px", marginBottom: "10px" }} id="mouse-arrow" />
            </div>
        </header>
    )
}

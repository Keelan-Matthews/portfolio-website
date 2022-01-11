import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBezierCurve } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

export const AboutMe = () => {
    return (
        <section className="about-me-background" id="about-me-nav">
            <div className="categories">
                <div className="category-card">
                    <div className="title">
                        <h3>Design</h3>
                        <FontAwesomeIcon icon={ faBezierCurve } style={{ color: "var(--green)"}} />
                    </div>
                    <p>Proficient in mockups in Figma, vector graphics in Adobe Illustrator and 3D renders in Blender.</p>
                </div>
                <div className="category-card">
                    <div className="title">
                        <h3>Front-end Development</h3>
                        <FontAwesomeIcon icon={ faCode } style={{ color: "var(--green)"}} />
                    </div>
                    <p>Capable of developing websites using HTML, CSS, SASS, JavaScript and ReactJS.</p>
                </div>
                <div className="category-card">
                    <div className="title">
                        <h3>Coding</h3>
                        <FontAwesomeIcon icon={ faTerminal } style={{ color: "var(--green)"}} />
                    </div>
                    <p>Experience in coding in Delphi, C++ and Java.</p>
                </div>
            </div>
            <div className="introduction">
                <div><small>
                    About
                </small></div>
                
                <h2>Allow me to<br /> introduce myself</h2>
                <h4>Background</h4>
                <p>
                    I am an aspiring UI/UX Designer from Johannesburg, South Africa. Growing up, I have always had an insatiable desire for creativity and perfection. This, coupled up with my thorough enjoyment in coding, lead me down my current path.<br /><br />
                    I have a thorough passion for coding, be it in programming or markup languages. The idea of being able to produce anything from scratch intrigues me. This also includes designing vector graphics, 3D renders, animations and even music.<br /><br />
                    I am able to pick up new skills very quickly, and always complete my deadlines early. In the event of time constraints, I thrive under pressure.
                </p>
                <h4>Goal</h4>
                <p>
                    To design and develop websites and applications that reflect the personality and motives of prospective clients.
                </p>
            </div>
            <div className="about-me-background-circles">
                <div id="circle-4"></div>
                <div id="circle-5"></div>
                <div id="circle-6"></div>
                <div id="circle-7"></div>
            </div>
        </section>
    )
}



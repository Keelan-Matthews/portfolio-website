import React, { useState, useRef, useMemo, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBezierCurve } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

export const AboutMe = () => {
    //Intersection observer
    const targetRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        const currentTarget = targetRef.current;
        if (currentTarget && (window.innerWidth > '1100') ) 
            observer.observe(currentTarget)
        else
            setIsVisible(true);
        
        return () => {
            if(currentTarget) observer.unobserve(currentTarget);
        }
    }, [targetRef, options]);

    return (
        <section className="about-me-background" id="about-me-nav">
            <div className="categories" ref={targetRef}>
                <div className={isVisible ? "category-card card-animation-1" : "category-card card-exit-animation-1"}>
                    <div className="title">
                        <h3>Design</h3>
                        <FontAwesomeIcon icon={ faBezierCurve } style={{ color: "var(--green)"}} />
                    </div>
                    <p>Proficient in mockups in Figma, vector graphics in Adobe Illustrator and 3D renders in Blender.</p>
                </div>
                <div className={isVisible ? "category-card card-animation-2" : "category-card card-exit-animation-2"}>
                    <div className="title">
                        <h3>Front-end Development</h3>
                        <FontAwesomeIcon icon={ faCode } style={{ color: "var(--green)"}} />
                    </div>
                    <p>Capable of developing websites using HTML, CSS, SASS, JavaScript and ReactJS.</p>
                </div>
                <div className={isVisible ? "category-card card-animation-3" : "category-card card-exit-animation-3"}>
                    <div className="title">
                        <h3>Coding</h3>
                        <FontAwesomeIcon icon={ faTerminal } style={{ color: "var(--green)"}} />
                    </div>
                    <p>Experience in coding in Delphi, C++ and Java.</p>
                </div>
            </div>
            <div className="introduction-wrapper">
                <div className={isVisible ? "introduction introduction-animation" : "introduction introduction-display-none"}>
                    <div><small>
                        About
                    </small></div>
                    
                    <h2>A little bit<br /> about the developer</h2>
                    <h4>Background</h4>
                    <p>
                        I am an aspiring Full Stack Developer from <span style={{color: "var(--green)"}}>Johannesburg, South Africa</span>. Growing up, I have always had an insatiable desire for creativity and perfection. This, coupled up with my thorough enjoyment in coding, lead me down my current path.<br /><br />
                        I have a thorough passion for coding, be it in programming or markup languages. The idea of being able to produce anything from scratch <span style={{color: "var(--green)"}}>intrigues me</span>. This also includes designing vector graphics, 3D renders, animations and even music.<br /><br />
                        I am able to pick up new skills very quickly, and always complete my deadlines early. In the event of time constraints, I <span style={{color: "var(--green)"}}>thrive</span> under pressure.
                    </p>
                </div>
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



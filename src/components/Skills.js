import React from 'react';
import { SkillCard } from './SkillCard';
import jsLogo from '../media/svg/javascript-logo.svg';
import aiLogo from '../media/svg/ai-logo.svg';
import Blender from '../media/svg/blender-logo.svg';
import C from '../media/svg/c-logo.svg';
import Html from '../media/svg/html-logo.svg';
import Css from '../media/svg/css-logo.svg';
import psLogo from '../media/svg/ps-logo.svg';
import SassLogo from '../media/svg/sass-logo.svg';
import FigmaLogo from '../media/svg/figma-logo.svg';
import ReactIcon from '../media/svg/react-logo.svg';

export const Skills = () => {
    return (
        <section className="skills-section" id="skills-nav">
            <div className="skills-wrapper">
                <div className="heading-wrapper">
                    <div className="heading">
                        <div>
                            <small>Top</small>
                        </div>
                        <h2>Skills</h2>
                    </div>
                    <div className="green-circle-skills"></div>
                </div>
                <div className="skill-container">
                    <SkillCard vector={ Html } alt="HTML logo" name="HTML" />
                    <SkillCard vector={ Css } alt="CSS logo" name="CSS" />
                    <SkillCard vector={ jsLogo } alt="JavaScript logo" name="JavaScript" />
                    <SkillCard vector={ SassLogo } alt="Sass logo" name="SASS" />
                    <SkillCard vector={ ReactIcon } alt="ReactJS logo" name="ReactJS" />
                    <SkillCard vector={ C } alt="C++ logo" name="C++" />
                    <SkillCard vector={ aiLogo } alt="Adobe Illustrator logo" name="Adobe Illustrator" />
                    <SkillCard vector={ psLogo } alt="Adobe Photoshop logo" name="Adobe Photoshop" />
                    <SkillCard vector={ FigmaLogo } alt="Figma logo" name="Figma" />
                    <SkillCard vector={ Blender } alt="Blender logo" name="Blender" />
                </div>
            </div>

            <div className="skills-background-circles">    
                <div id="circle-14"></div>
                <div id="circle-15"></div>
                <div id="circle-16"></div>
                <div id="circle-17"></div>
            </div>
        </section>
    )
}

import React from 'react';
import { ProjectCard } from './ProjectCard';
import RegalTMockup from '../media/images/regal-t-mockup.webp';
import BursaryBuffetMockup from '../media/images/bursary-buffet-mockup.webp';

export const Projects = () => {
    return (
        <section className="projects-section" id="projects-nav">
            <div className="project-wrapper">
                <div className="heading-wrapper-projects">
                    <div className="heading">
                        <div>
                            <small>Recent</small>
                        </div>
                        <h2>Projects</h2>
                    </div>
                    <div className="green-circle-projects"></div>
                </div>
                <div className="project-container">
                    <ProjectCard image={ RegalTMockup } name="Regal-T Electrical" alt="Image showing a mockup of the Regal-T Electrical website" info="This was an official commission for a company located in the UK. I was required to design and develop a landing page for their company that informed prospective clients of their services, works, information about the business, and a way to contact them." link="https://www.regal-telectrical.co.uk" cta="Go to website" className="project-card" />
                    <ProjectCard image={ BursaryBuffetMockup } name="Bursary Buffet" alt="Image showing a mockup of the Bursary Buffet website" info="Bursary Buffet is a non-profit organization that aims to make applying for bursaries a simple process. I was required to design and help develop the fron-end of the website." link="https://www.figma.com/file/HFyCe5rdJGSowRCLVELslb/Bursary-Buffet" cta="Figma Link" className="project-card" />
                </div>
            </div>
            
            <div className="background">    
                <div id="circle-8"></div>
                <div id="circle-9"></div>
                <div id="circle-10"></div>
                <div id="circle-11"></div>
                <div id="circle-12"></div>
                <div id="circle-13"></div>
            </div>
        </section>
    )
}

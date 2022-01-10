import React from 'react'

export const ProjectCard = (props) => {
    return (
        <div className="project-card-container">
            <img src={ props.image } alt={ props.alt } />
            <div className="project-info">
                <h3>{ props.name }</h3>
                <p>{ props.info }</p>
                <a href={ props.link } target="_blank">
                    <div className="project-link"><p>{ props.cta }</p></div>
                </a>
            </div>
        </div>
    )
}

import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-details">
        <div className="project-img-wrapper">
          <img className="project-img" src={props.img} alt={props.alt}/>
        </div>
        <div className="project-description">
          <h2>{props.title}</h2>
          <p className="details-p">{props.description}</p>
          <p className="tech-used">{props.tech}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;


import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h2>{props.title}</h2>
      <hr/>
      <div>
        <div className="project-img-wrapper">
          <img className="project-img" src={props.img} alt={props.alt}/>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;


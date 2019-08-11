import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h2>{props.title}</h2>
      <hr/>
      <div>
        <img className="project-img" src={props.img} alt={props.alt}/>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;


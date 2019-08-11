import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h2>{props.title}</h2>
      <hr/>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;


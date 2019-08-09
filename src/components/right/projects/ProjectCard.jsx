import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <hr/>
      <p>{props.description}</p>
      <hr/>
      <div className="project-urls">
        <a href={props.codeURL}>GitHub</a>
        <a href={props.liveURL}>Live</a>
      </div>
    </div>
  );
}

export default ProjectCard;


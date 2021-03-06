import React from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-details">
        <a href={props.live_url} target="_blank" rel="noopener noreferrer" className="project-img-wrapper">
          <img className="project-img" src={props.img} alt={props.alt}/>
        </a>
        <div className="project-description">
          <h2>{props.title}</h2>
          <p className="details-p">{props.description}</p>
          <p className="tech-used">{props.tech}</p>
          <div className="icon-links">
            <a href={props.code_url} className="project-icons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare}/></a>
            <a href={props.live_url} className="project-icons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkSquareAlt}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;


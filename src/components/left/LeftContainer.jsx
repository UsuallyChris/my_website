import React, {Component} from 'react';

// Component Imports
import Nav from './Nav';
import { Link } from 'react-router-dom';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

class LeftContainer extends Component {
  render() {
    return (
      <div className="left-container">
        <div className="tag">
          <h1>Hi! My name is <span className="tag-highlight">Chris Schoonover</span>.</h1>
          <h1>I build stuff for the web.</h1>
        </div>
        <div className="nav-wrapper">
          <Nav />
          <Link to="#">Resume</Link>
        </div>
        <div className="socials-wrapper">
          <div className="socials-header">
            <h3>Find Me:</h3>
            <hr/>
          </div>
          <div className="socials-icons">
            <div className="icons-wrapper">
              <FontAwesomeIcon className="icons" icon={faGithubSquare}/>
              <p>&nbsp;&nbsp;:&nbsp;&nbsp;github.com/UsuallyChris</p>
            </div>
            <div className="icons-wrapper">
              <FontAwesomeIcon className="icons" icon={faTwitterSquare}/>
              <p>&nbsp;&nbsp;:&nbsp;&nbsp;@UsuallyChris</p>
            </div>  
            <div className="icons-wrapper">
              <FontAwesomeIcon className="icons" icon={faEnvelopeSquare}/>
              <p>&nbsp;&nbsp;:&nbsp;&nbsp;schoonc@gmail.com</p>
            </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default LeftContainer;
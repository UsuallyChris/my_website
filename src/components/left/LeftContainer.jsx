import React, {Component} from 'react';

// Component Imports
import Nav from './Nav';
import { Link } from 'react-router-dom';

class LeftContainer extends Component {
  render() {
    return (
      <div className="left-container">
        <div className="tag">
          <h1>Hello, I'm <span className="tag-highlight">Chris Schoonover</span>.</h1>
          <h1>I'm a developer based in San Diego.</h1>
        </div>
        <div className="nav-wrapper">
          <Nav />
          <Link to="#">Resume</Link>
        </div>
        <div className="socials-wrapper">
          <div className="socials-header">
            <h3>Contact Me:</h3>
            <hr/>
          </div>
          <div className="socials-icons">
            <p>GitHub</p>
            <p>Twitter</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LeftContainer;
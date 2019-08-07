import React, {Component} from 'react';

// Component Imports
import Nav from './Nav';

class LeftContainer extends Component {
  render() {
    return (
      <div className="left-container">
        <div className="tag">
          <h1>Hello, I'm Chris Schoonover.</h1>
          <h1>I'm a developer based in San Diego.</h1>
        </div>
        <div className="nav-container">
          <Nav />
          <h2>Resume</h2>
        </div>
        <div className="socials-wrapper">
          <p>GitHub</p>
          <p>Twitter</p>
          <p>Email</p>
        </div>
      </div>
    )
  }
}

export default LeftContainer;
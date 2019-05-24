import React, { Component } from 'react';

// component imports
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

class RightContainer extends Component {
  render() {
    return (
      <div>
        <h1>Right Side</h1>
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    )
  }
}

export default RightContainer;
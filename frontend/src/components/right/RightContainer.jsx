import React, { Component } from 'react';

// component imports
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';

class RightContainer extends Component {
  render() {
    return (
      <div className="right-container">
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
      </div>
    )
  }
}

export default RightContainer;
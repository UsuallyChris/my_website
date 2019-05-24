import React, { Component } from 'react';

// component imports
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

class RightContainer extends Component {
  render() {
    return (
      <div className="right-container">
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    )
  }
}

export default RightContainer;
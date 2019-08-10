import React, { Component } from 'react';

// Component Imports
import Page from '../common/Page';

// Image Import
import profile from '../../../resources/profile.jpg';

class AboutMe extends Component {
  render() {
    return (
      <Page title="ABOUT">
        <div>
          <h2>Who, me?</h2>
          <hr/>
          <div className="about-wrapper">
            <div className="about-text">
              <p>Hello! I'm Chris, a software engineer based in San Diego, CA who enjoys building things that find their home on the internet.</p>
              <p>I recently graduated from San Diego State University and am currently looking for work in the San Diego area. I am open to remote positions.</p>
              <p>Shoot me an email, message me on Twitter, or send me a smoke signal. Let's connect.</p>
            </div>
            <div className="profile-container">
              <img className="profile" src={profile} alt=""/>
            </div>  
          </div>
        </div>
        <div>
          <h2>Technologies I've worked with lately:</h2>
          <hr/>
          <div className="tech-list">
            <ul>
              <li>Test 1</li>
              <li>Test 2</li>
              <li>Test 3</li>
            </ul>
            <ul>
              <li>Test 1</li>
              <li>Test 2</li>
              <li>Test 3</li>
            </ul>
          </div>
        </div>
      </Page>
    )
  }
}

export default AboutMe;
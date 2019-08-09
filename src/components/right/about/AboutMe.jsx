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
            <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium doloremque recusandae dignissimos expedita exercitationem quo, eaque sequi, libero porro sunt sit. Deleniti a in perspiciatis tempore amet adipisci laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium doloremque recusandae dignissimos expedita exercitationem quo, eaque sequi, libero porro sunt sit. Deleniti a in perspiciatis tempore amet adipisci laudantium?</p>
            <div className="profile-container">
              <img className="profile" src={profile} alt=""/>
            </div>  
          </div>
        </div>
        <div>
          <h2>Technologies I've worked with lately:</h2>
          <hr/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium doloremque recusandae dignissimos expedita exercitationem quo, eaque sequi, libero porro sunt sit. Deleniti a in perspiciatis tempore amet adipisci laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium doloremque recusandae dignissimos expedita exercitationem quo, eaque sequi, libero porro sunt sit. Deleniti a in perspiciatis tempore amet adipisci laudantium?</p>
        </div>
      </Page>
    )
  }
}

export default AboutMe;
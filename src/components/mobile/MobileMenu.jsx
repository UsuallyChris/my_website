import React, { Component } from 'react';

// Component Imports
import MobileNav from './MobileNav';
import OpenMenu from './OpenMenu';
import CloseMenu from './CloseMenu';

// Resume Import
import Resume from '../../resources/Resume.pdf';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

class MobileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '0vw',
      opacity: '1'
    }

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.setState({
      width: '100vw',
      opacity: '1'
    })
  }

  closeMenu() {
    this.setState({
      width: '0vw',
      opacity: '0'
    })
  }

  render() {
    return(
      <div>
        <div className="mobile-menu" style={{width: this.state.width, opacity: this.state.opacity}}>
          <div className="mobile-menu-container">
            <div className="tag">
              <h1>Hi there!</h1>
              <h1>My name is <span className="tag-highlight">Chris Schoonover</span>.</h1>
              <h1>I build stuff for the web.</h1>
            </div>
            <div className="nav-wrapper">
              <MobileNav />
              <a href={Resume} className="mobile-links" target="_blank" rel="noopener noreferrer">Resume</a>
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
            <CloseMenu function={this.closeMenu}/>
          </div>
        </div>
        <OpenMenu function={this.openMenu}/>
      </div>
    );
  }
}

export default MobileMenu;
import React, {Component} from 'react';

// Component Imports
import Nav from './Nav';

class LeftContainer extends Component {
  render() {
    return (
      <div className="left-container">
        <h1>Left Side</h1>
        <Nav />
      </div>
    )
  }
}

export default LeftContainer;
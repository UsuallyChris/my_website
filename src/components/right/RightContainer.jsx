import React from 'react';

// Component Imports
import Nav from './Nav';

function RightContainer(props) {
  return (
    <div className="right-container">
      <Nav />
      {props.children}
    </div>
  )
}

export default RightContainer;
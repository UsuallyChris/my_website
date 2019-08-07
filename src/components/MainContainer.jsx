import React from 'react';

// Component Imports
import LeftContainer from './left/LeftContainer';
import RightContainer from './right/RightContainer';

function MainConatiner(props) {
  return(
    <div className="main-container">
      <LeftContainer/>
      <RightContainer>
        {props.children}
      </RightContainer>
    </div>
  );
}

export default MainConatiner;
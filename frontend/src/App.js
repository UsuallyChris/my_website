import React from 'react';
import './App.css';

import LeftMain from './components/left/LeftMain';
import RightContainer from './components/right/RightContainer';

function App() {
  return (
    <div className="main-container">
      <LeftMain />
      <RightContainer />
    </div>
  );
}

export default App;

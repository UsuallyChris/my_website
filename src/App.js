import React from 'react';
import './css/normalize.css';
import './css/App.css';

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

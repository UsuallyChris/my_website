import React from 'react';
import './css/normalize.css';
import './css/App.css';

// Component Imports
import LeftMain from './components/left/LeftMain';
import RightContainer from './components/right/RightContainer';
import AboutMe from './components/right/AboutMe';
import Projects from './components/right/Projects';
import Skills from './components/right/Skills';

// React Router Imports
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <LeftMain />
        <RightContainer>
          <Switch>
            <Route exact path='/' component={AboutMe} />
            <Route path='/projects' component={Projects} />
            <Route path='/skills' component={Skills} />
          </Switch>
        </RightContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;

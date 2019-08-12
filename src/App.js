import React from 'react';
import './css/normalize.css';
import './css/App.css';

// Component Imports
import MainContainer from './components/MainContainer';
import AboutMe from './components/right/about/AboutMe';
import Projects from './components/right/projects/Projects';

// React Router Imports
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Switch>
          <Route exact path='/' component={AboutMe} />
          <Route path='/about' component={AboutMe} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;

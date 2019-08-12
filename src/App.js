import React, { Component } from 'react';
import './css/normalize.css';
import './css/App.css';

// Component Imports
import MainContainer from './components/MainContainer';
import AboutMe from './components/right/about/AboutMe';
import Projects from './components/right/projects/Projects';

// Mobile Component Imports
import MobileContainer from './components/MobileContainer';

// React Router Imports
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    }

    this.handleWidnowSizeChange = this.handleWidnowSizeChange.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWidnowSizeChange);
  }

  handleWidnowSizeChange() {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {

    const { width } = this.state;

    if(width < 1300) {
      return(
        <BrowserRouter>
          <MobileContainer>
            <h1>Testing</h1>
          </MobileContainer>
        </BrowserRouter>
      )
    } else {
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
  }
}

export default App;

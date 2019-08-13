import React, { Component } from 'react';
import './css/normalize.css';
import './css/App.css';

// Component Imports
import MainContainer from './components/MainContainer';
import AboutMe from './components/right/about/AboutMe';
import Projects from './components/right/projects/Projects';

// Mobile Component Imports
import MobileContainer from './components/mobile/MobileContainer';
import MobileLanding from './components/mobile/MobileLanding';
import MobileAboutMe from './components/mobile/MobileAboutMe';
import MobileProjects from './components/mobile/MobileProjects';

// React Router Imports
import { HashRouter, Switch, Route } from 'react-router-dom';

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

    if(width <= 1300) {
      return(
        <HashRouter>
          <MobileContainer>
            <Switch>
              <Route exact path='/' component={MobileLanding} />
              <Route path='/about' component={MobileAboutMe} />
              <Route path='/projects' component={MobileProjects} />
            </Switch>
          </MobileContainer>
        </HashRouter>
      )
    } else {
      return (
        <HashRouter>
          <MainContainer>
            <Switch>
              <Route exact path='/' component={AboutMe} />
              <Route path='/about' component={AboutMe} />
              <Route path='/projects' component={Projects} />
            </Switch>
          </MainContainer>
        </HashRouter>
      );
    }
  }
}

export default App;

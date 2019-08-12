import React, { Component } from 'react';
import './css/normalize.css';
import './css/App.css';

// Component Imports
import MainContainer from './components/MainContainer';
import AboutMe from './components/right/about/AboutMe';
import Projects from './components/right/projects/Projects';

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
        <h1>TEST</h1>
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

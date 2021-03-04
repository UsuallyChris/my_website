import React, { Component } from 'react';

// Component Imports
import MobilePage from './MobilePage';
import ProjectCardLeft from '../right/projects/ProjectCardLeft';
import ProjectCardRight from '../right/projects/ProjectCardRight';
import MobileProjectCardLeft from './MobileProjectCardLeft';
import MobileProjectCardRight from './MobileProjectCardRight';

// Image Imports
import Bills from '../../resources/bills.png';
import Jobs from '../../resources/jobs.png';

class Projects extends Component {
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

    if(width < 800) {
      return (
        <MobilePage title="PROJECTS">
          <MobileProjectCardLeft 
            title="Personal Finance App"
            img={Bills}
            alt="Personal Finance App Screenshot"
            description="A web app for visualizing your finances and spending."
            tech="React&nbsp;&nbsp;Redux&nbsp;&nbsp;Express&nbsp;&nbsp;MongoDB"
            code_url="https://github.com/UsuallyChris/job_tracker"
            live_url="https://morning-spire-21183.herokuapp.com/"
          />
          <MobileProjectCardRight
            title="Job Application Tracker"
            img={Jobs}
            alt="Job Application Tracker Screenshot"
            description="An easy way to track your job search."
            tech="React&nbsp;&nbsp;Redux&nbsp;&nbsp;Django"
            code_url="https://github.com/UsuallyChris/bills"
            live_url="https://intense-everglades-34021.herokuapp.com/"
          />
        </MobilePage>
      )
    } else {
      return (
        <MobilePage title="PROJECTS">
          <ProjectCardLeft 
            title="Personal Finance App"
            img={Bills}
            alt="Personal Finance App Screenshot"
            description="A web app for visualizing your finances and spending."
            tech="React&nbsp;&nbsp;Redux&nbsp;&nbsp;Express&nbsp;&nbsp;MongoDB"
            code_url="https://github.com/UsuallyChris/job_tracker"
            live_url="https://morning-spire-21183.herokuapp.com/"
          />
          <ProjectCardRight
            title="Job Application Tracker"
            img={Jobs}
            alt="Job Application Tracker Screenshot"
            description="An easy way to track your job search."
            tech="React&nbsp;&nbsp;Redux&nbsp;&nbsp;Django"
            code_url="https://github.com/UsuallyChris/bills"
            live_url="https://intense-everglades-34021.herokuapp.com/"
          />
        </MobilePage>
      )
    } 
  }
}

export default Projects;
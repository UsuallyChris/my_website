import React from 'react';

// Component Imports
import MobilePage from './MobilePage';
import ProjectCardLeft from '../right/projects/ProjectCardLeft';
import ProjectCardRight from '../right/projects/ProjectCardRight';

// Image Imports
import Bills from '../../resources/bills.png';
import Jobs from '../../resources/jobs.png'

function Projects() {
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

export default Projects;
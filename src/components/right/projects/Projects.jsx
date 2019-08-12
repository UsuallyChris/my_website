import React from 'react';

// Component Imports
import Page from '../common/Page';
import ProjectCard from './ProjectCard';

// Image Imports
import Bills from '../../../resources/bills.png';
import Jobs from '../../../resources/jobs.png'

function Projects() {
  return (
    <Page title="PROJECTS">
      <ProjectCard 
        title="Personal Finance App"
        img={Bills}
        alt="Personal Finance App Screenshot"
        description="A web app for visualizing your finances and spending."
        tech="React&nbsp;&nbsp;Redux&nbsp;&nbsp;Express&nbsp;&nbsp;MongoDB"
      />
      <ProjectCard 
        title="Job Application Tracker"
        img={Jobs}
        alt="Job Application Tracker Screenshot"
        description="An easy way to track your job search."
        tech="React&nbsp;&nbsp;Redux&nbsp;&nbsp;Django"
      />
    </Page>
  )
}

export default Projects;
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
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium doloremque recusandae dignissimos expedita exercitationem quo, eaque sequi, libero porro sunt sit."
      />
      <ProjectCard 
        title="Job Application Tracker"
        img={Jobs}
        alt="Job Application Tracker Screenshot"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium doloremque recusandae dignissimos expedita exercitationem quo, eaque sequi, libero porro sunt sit."
      />
    </Page>
  )
}

export default Projects;
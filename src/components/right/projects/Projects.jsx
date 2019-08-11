import React from 'react';

// Component Imports
import Page from '../common/Page';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <Page title="PROJECTS">
      <ProjectCard 
        title="Personal Finance App"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium doloremque recusandae dignissimos expedita exercitationem quo, eaque sequi, libero porro sunt sit. Deleniti a in perspiciatis tempore amet adipisci laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium doloremque recusandae dignissimos expedita exercitationem quo, eaque sequi, libero porro sunt sit. Deleniti a in perspiciatis tempore amet adipisci laudantium?"
      />
      <ProjectCard 
        title="Job Application Tracker"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium doloremque recusandae dignissimos expedita exercitationem quo, eaque sequi, libero porro sunt sit. Deleniti a in perspiciatis tempore amet adipisci laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium doloremque recusandae dignissimos expedita exercitationem quo, eaque sequi, libero porro sunt sit. Deleniti a in perspiciatis tempore amet adipisci laudantium?"
      />
    </Page>
  )
}

export default Projects;
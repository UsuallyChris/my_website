import React, { Component } from 'react';
import axios from 'axios';

import ProjectCard from './ProjectCard';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }

    this.getProjects = this.getProjects.bind(this);
  }

  getProjects() {
    axios.get('http://localhost:5000/projects')
      .then(res => {
        console.log(res.data);
        this.setState({
          projects: res.data
        })
      })
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    return (
      <div className="content-container projects">
        <h1>Projects</h1>
        <div className="project-cards-container">
          {this.state.projects.map(project => (
            <ProjectCard 
              title={project.title}
              description={project.description}
              codeURL={project.codeURL}
              liveURL={project.liveURL}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Projects;
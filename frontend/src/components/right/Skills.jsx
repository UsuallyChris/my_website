import React, { Component } from 'react';
import axios from 'axios';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: [],
      working: []
    }

    this.getSkills = this.getSkills.bind(this);
  }

  getSkills() {
    axios.get('http://localhost:5000/skills')
      .then(res => {
        const skills = res.data;
        const base = skills.filter(skill => skill.type === 'base');
        const working = skills.filter(skill => skill.type === 'working');
        this.setState({
          base,
          working
        })
      })

  }

  componentDidMount() {
    this.getSkills();
  }

  render() {
    return (
      <div className="content-container skills">
        <h1>Skills</h1>
        <div className="skills-list">
          <div>
            <ul>
              {this.state.base.map(skill => <li key={skill.id}>{skill.name}</li>)}
            </ul>
          </div>
          <div>
            <ul>
              {this.state.working.map(skill => <li key={skill.id}>{skill.name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
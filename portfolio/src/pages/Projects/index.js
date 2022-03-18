import React, { useState } from "react";
import Project from '../../components/Project';

function Projects() {
  const [projects] = useState([
    {
      title: 'project 1',
      description: 'project 1'
    },
    {
      title: 'project 2',
      description: 'project 2'
    },
    {
      title: 'project 3',
      description: 'project 3'
    },
    {
      title: 'project 4',
      description: 'project 4'
    },
    {
      title: 'project 5',
      description: 'project 5'
    }
  ], []);

  return (
    <section className="project-section">
      <Project project={projects[0]}></Project>
      <Project project={projects[1]}></Project>
      <Project project={projects[2]}></Project>
      <Project project={projects[3]}></Project>
      <Project project={projects[4]}></Project>
    </section >
  )
}

export default Projects;
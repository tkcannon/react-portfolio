import React, { useState } from "react";
import Project from "../../components/Project";

function Portfolio() {

  const [projects] = useState([
    {
      title: 'project 1',
      description: 'project 1',
      link: 'tkcannon.github.io/',
      image: '../assets/images/placeholder.jpeg'
    },
    {
      title: 'project 2',
      description: 'project 2',
      link: 'tkcannon.github.io/',
      image: '../assets/images/placeholder.jpeg'
    },
    {
      title: 'project 3',
      description: 'project 3',
      link: 'tkcannon.github.io/',
      image: '../assets/images/placeholder.jpeg'
    },
    {
      title: 'project 4',
      description: 'project 4',
      link: 'tkcannon.github.io/',
      image: '../assets/images/placeholder.jpeg'
    },
    {
      title: 'project 5',
      description: 'project 5',
      link: 'tkcannon.github.io/',
      image: '../assets/images/placeholder.jpeg'
    }
  ], []);

  return (
    <section className="project-section">
      <h2>Projects</h2>
      <div>
        <Project project={projects[0]}></Project>
        <Project project={projects[1]}></Project>
        <Project project={projects[2]}></Project>
        <Project project={projects[3]}></Project>
        <Project project={projects[4]}></Project>
      </div>
    </section >
  )
}

export default Portfolio;
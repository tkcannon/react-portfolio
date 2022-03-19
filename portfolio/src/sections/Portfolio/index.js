import React, { useState } from "react";
import Project from "../../components/Project";

function Portfolio() {

  const [projects] = useState([
    {
      title: 'project 1',
      description: 'project 1',
      link: 'tkcannon.github.io/',
      image: '0.jpg'
    },
    {
      title: 'project 2',
      description: 'project 2',
      link: 'tkcannon.github.io/',
      image: 'placeholder.jpg'
    },
    {
      title: 'project 3',
      description: 'project 3',
      link: 'tkcannon.github.io/',
      image: 'placeholder.jpg'
    },
    {
      title: 'project 4',
      description: 'project 4',
      link: 'tkcannon.github.io/',
      image: 'placeholder.jpg'
    },
    {
      title: 'project 5',
      description: 'project 5',
      link: 'tkcannon.github.io/',
      image: 'placeholder.jpg'
    }
  ], []);

  return (
    <section className="project-section">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <Project
            project={project}
            key={project.title}
          />
        ))}
      </div>
    </section >
  )
}

export default Portfolio;
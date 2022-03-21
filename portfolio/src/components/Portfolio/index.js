import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      title: 'Fleet Keeper',
      description: '',
      link: 'tkcannon.github.io/',
      image: 'fleet-keeper.jpg'
    },
    {
      title: 'Event-Buddy',
      description: '',
      link: 'tkcannon.github.io/',
      image: 'event-buddy.jpg'
    },
    {
      title: 'Work Day Scheduler',
      description: '',
      link: 'https://tkcannon.github.io/work-day-scheduler/',
      image: 'work-day-scheduler.gif'
    },
    {
      title: 'The Tech Blog',
      description: '',
      link: 'https://secure-temple-36331.herokuapp.com/',
      image: 'the-tech-blog.png'
    },
    {
      title: 'Weather Dashboard',
      description: '',
      link: 'https://tkcannon.github.io/weather-dashboard/',
      image: 'weather-dash.png'
    },
    {
      title: 'Run Buddy',
      description: 'A Module',
      link: 'https://tkcannon.github.io/run-buddy',
      image: 'run-buddy.png'
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
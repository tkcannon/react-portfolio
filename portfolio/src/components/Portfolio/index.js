import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      title: 'Fleet Keeper ',
      description: 'Full Stack Project',
      link: 'https://whispering-hollows-87266.herokuapp.com/login',
      image: 'fleet-keeper.jpg',
      repo: 'https://github.com/cthorne87/fleet-keeper/'
    },
    {
      title: 'Event-Buddy ',
      description: 'Front End Project',
      link: 'https://dcarteciano.github.io/travel-buddy/',
      image: 'event-buddy.jpg',
      repo: 'https://github.com/dcarteciano/travel-buddy'
    },
    {
      title: 'Work Day Scheduler ',
      description: 'Javascript Challenge',
      link: 'https://tkcannon.github.io/work-day-scheduler/',
      image: 'work-day-scheduler.gif',
      repo: 'https://github.com/tkcannon/work-day-scheduler'
    },
    {
      title: 'The Tech Blog ',
      description: 'Full Stack Challenge',
      link: 'https://secure-temple-36331.herokuapp.com/',
      image: 'the-tech-blog.png',
      repo: 'https://github.com/tkcannon/the-tech-blog'
    },
    {
      title: 'Weather Dashboard ',
      description: 'Front End Challenge',
      link: 'https://tkcannon.github.io/weather-dashboard/',
      image: 'weather-dash.png',
      repo: 'https://github.com/tkcannon/weather-dashboard'
    },
    {
      title: 'Run Buddy ',
      description: 'Html Module',
      link: 'https://tkcannon.github.io/run-buddy',
      image: 'run-buddy.png',
      repo: 'https://github.com/tkcannon/run-buddy'
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
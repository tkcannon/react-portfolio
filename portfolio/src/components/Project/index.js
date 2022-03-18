import React from "react";

function Project({ project }) {
  return (
    <>
      <div className="project">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>Link</a>
        </div>
        <img src={project.image} alt='placeholder'></img>
      </div>
    </>
  );
}

export default Project;
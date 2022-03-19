import React from "react";

function Project({ project }) {

  return (
    <>
      <a href={project.link}>
        <div className="project">
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <img src={require('../../assets/images/' + project.image)} alt={project.title} />
        </div>
      </a>
    </>
  );
}

export default Project;
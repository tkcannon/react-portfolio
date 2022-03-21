import React from "react";

function Project({ project }) {

  return (
    <>
      <div className="project">
        <div className="project-details">
          <h3>
            {project.title}
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <i className="github-link fa-brands fa-github"></i>
            </a>
          </h3>
          <p>{project.description}</p>
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img src={require('../../assets/images/' + project.image)} alt={project.title} />
        </a>
      </div>
    </>
  );
}

export default Project;
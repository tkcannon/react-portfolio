import React from "react";

function Project({ project }) {

  return (
    <>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="project">
          <div className="project-details">
            <h3>{project.title}
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <i className="github-link fa-brands fa-github"></i>
              </a>
            </h3>
            <p>{project.description}</p>
          </div>
          <img src={require('../../assets/images/' + project.image)} alt={project.title} />
        </div>
      </a>
    </>
  );
}

export default Project;
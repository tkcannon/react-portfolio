import React from "react";

function Project({ project }) {



  return (
    <>
      <div className="project">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </>
  );
}

export default Project;
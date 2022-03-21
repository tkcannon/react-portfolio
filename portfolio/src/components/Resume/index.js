import React from "react";

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <button><i class="fa-solid fa-download"></i></button>
      <div>
        <h3>Front End</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>JQUERY</li>
          <li>Responsive Design</li>
          <li>REACT</li>
          <li>BOOTSTRAP</li>
        </ul>
      </div>
      <div>
        <h3>Back End</h3>
        <ul>
          <li>APIs</li>
          <li>NODE</li>
          <li>EXPRESS</li>
          <li>MYSQL</li>
          <li>SEQUELIZE</li>
          <li>MONGO</li>
          <li>MONGOOSE</li>
        </ul>
      </div>
    </section>
  )
}

export default Resume;
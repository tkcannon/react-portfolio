import React from "react";

function About() {
  return (
    <section id="about-section">
      <h2>About Me</h2>
      <img id='profile-image' src={require("../../assets/profile.jpg")} alt="Taylor Cannon" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, a ab culpa voluptatibus similique tenetur corrupti, officiis ducimus mollitia amet quidem alias consequatur harum consequuntur, sapiente tempora porro nulla. Dignissimos!</p>
    </section>
  )
}

export default About;

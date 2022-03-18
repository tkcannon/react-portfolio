import React from 'react';
import Nav from '../Navigation';

function Header({ projectsSelected, setProjectsSelected }) {

  return (
    <header>
      <h1>Taylor Cannon</h1>
      <Nav
        projectsSelected={projectsSelected}
        setProjectsSelected={setProjectsSelected}
      />
    </header>
  )
}

export default Header;
import React from "react";

function Nav({ projectsSelected, setProjectsSelected }) {

  return (
    <>
      <nav>
        <ul>
          <li>
            <span onClick={() => setProjectsSelected(false)}>
              About
            </span>
          </li>
          |
          <li>
            <span onClick={() => setProjectsSelected(true)}>
              Projects
            </span>
          </li>
          |
          <li>
            <span onClick={() => setProjectsSelected(false)}>
              Resume
            </span>
          </li>
          |
          <li>
            <span onClick={() => setProjectsSelected(false)}>
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;
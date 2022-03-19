import React from "react";

function Nav({ displayedContent, setDisplayedContent }) {

  return (
    <>
      <nav>
        <ul>
          <li>
            <span onClick={() => setDisplayedContent('about')}>
              About
            </span>
          </li>
          |
          <li>
            <span onClick={() => setDisplayedContent('portfolio')}>
              Portfolio
            </span>
          </li>
          |
          <li>
            <span onClick={() => setDisplayedContent('resume')}>
              Resume
            </span>
          </li>
          |
          <li>
            <span onClick={() => setDisplayedContent('contact')}>
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;
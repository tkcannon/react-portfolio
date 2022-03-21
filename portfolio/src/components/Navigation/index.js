import React from "react";

function Nav({ displayedContent, setDisplayedContent }) {

  return (
    <>
      <nav>
        <ul>
          <li className={`${displayedContent === 'about' && 'activeNav'}`} >
            <span onClick={() => setDisplayedContent('about')}>
              About
            </span>
          </li>
          <li className={`${displayedContent === 'portfolio' && 'activeNav'}`} >
            <span onClick={() => setDisplayedContent('portfolio')}>
              Portfolio
            </span>
          </li>
          <li className={`${displayedContent === 'resume' && 'activeNav'}`} >
            <span onClick={() => setDisplayedContent('resume')}>
              Resume
            </span>
          </li>
          <li className={`${displayedContent === 'contact' && 'activeNav'}`} >
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
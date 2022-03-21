import React from 'react';
import Nav from '../Navigation';

function Header({ displayedContent, setDisplayedContent }) {

  return (
    <header>
      <h1>Taylor Cannon</h1>
      <Nav
        displayedContent={displayedContent}
        setDisplayedContent={setDisplayedContent}
      />
    </header>
  )
}

export default Header;
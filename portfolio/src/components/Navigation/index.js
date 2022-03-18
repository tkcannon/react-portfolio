import React, { useState } from "react";

function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


      <nav>
        <ul>
          <li> About </li>
          |
          <li> Projects </li>
          |
          <li> Resume </li>
          |
          <li> Contact </li>
        </ul>
      </nav>

    </>
  )
}

export default Nav;
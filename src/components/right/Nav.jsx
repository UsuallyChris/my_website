import React from 'react';

// React Router Imports
import { NavLink } from 'react-router-dom';

function Nav() {
  return(
    <div className="nav-container">
      <NavLink exact={true} to='/'>About Me</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/skills'>Skills</NavLink>
    </div>
  );
}

export default Nav;
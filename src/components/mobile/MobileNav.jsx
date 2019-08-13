import React from 'react';

// React Router Imports
import { NavLink } from 'react-router-dom';

function Nav() {
  return(
    <div className="nav-container">
      <NavLink className="mobile-links" activeClassName="is-active" to='/about'>About</NavLink>
      <NavLink className="mobile-links" activeClassName="is-active" to='/projects'>Projects</NavLink>
    </div>
  );
}

export default Nav;
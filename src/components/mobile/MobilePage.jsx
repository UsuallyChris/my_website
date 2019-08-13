import React from 'react';

import MobileMenu from './MobileMenu';

function Page(props) {
  return(
    <div className="mobile-page-container">
      <h1>{props.title}</h1>
      <hr/>
      <div className="content-container">
        {props.children}
      </div>
      <MobileMenu />
    </div>
  )
}

export default Page;
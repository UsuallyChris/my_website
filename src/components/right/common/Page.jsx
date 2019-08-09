import React from 'react';

function Page(props) {
  return(
    <div className="page-container">
      <h1>{props.title}</h1>
      <hr/>
      <div className="content-container">
        {props.children}
      </div>
    </div>
  )
}

export default Page;
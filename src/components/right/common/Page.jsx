import React from 'react';

function Page(props) {
  return(
    <div className="page-container">
      <h1>{props.title}</h1>
      <hr/>
      {props.children}
    </div>
  )
}

export default Page;
import React from 'react'
import './nav.css' ;
export default function () {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary ">
   
   <div className="container w-75">
     <a className="navbar-brand" href="#">React Task 2</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="#">Home</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">Link</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">About</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">Contact</a>
         </li>
       </ul>
     </div>
   </div>
   
 </nav>
 
    </>
  )
}

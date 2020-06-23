import React from "react";
import "./header.css"


function Header () {
    return (
        // header container 
  <section className="container-fluid">
    <header className="row justify-content-around mr-0 mr-lg-5" id="header">
      {/* h1 element on the top left of the page */}
      <div className="col-12 col-md-3">
        <h1><span style={{fontFamily: "Merriweather, serif"}}>Bio</span> <span
            style={{fontFamily:"Source Sans Pro, sans-serif", fontSize: "xx-large"}}> Sheet</span></h1>
      </div>
      {/* top navigation bar styled to looks like and array */}
      <div className="col-12 col-md-9 col-xl-7">
        <nav className="nav justify-content-md-end justify-content-center">
          <span>var navBar = [</span>
          <a className="nav-link" href="#aboutMe">About Me</a>
          <a className="nav-link" href="#portfolioSection">My Portfolio</a>
          <a className="nav-link" href="#contactSection">Contact Me</a>
          <span>]</span>
        </nav>
      </div>
    </header>
  </section>
    )
}

export default Header
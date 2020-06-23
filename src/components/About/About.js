import React from "react"
import "./About.css"

function About() {
    
    return (
        //  section for about me
    <section className="container-fluid" id="aboutMe">
      <div className="row justify-content-center">
        <div className="col">
          <h2 style={{ fontFamily: "Merriweather, serif" }}>About Me</h2>
        </div>
        <div className="w-100"></div>
        <img alt="icon brackets" className="codingIcon" src="https://img.icons8.com/ios/50/000000/source-code.png" />
      </div>
      <div className="row justify-content-center">
        {/* column on the left side of the about me section with text content of about me section */}
        <div className="col-12 col-lg-5 col-xl-4 pr-0 mr-0 pr-lg-5 mr-lg-5" id="aboutMeTextContent">
          <p>I am a highly energetic self-starter, recognized for sound judgment, time management, and attention to
            detail, with a "look beyond obstacles" approach to problem solving. I work well under pressure and I am not
            easily discouraged. I am self-motivated and I’m always working with a goal in mind. </p>
          <h6><span style={{fontWeight: "bold", fontSize: "22px"}}>Full Name:</span>&nbsp;&nbsp;&nbsp;&nbsp;Brian Farmer
          </h6>
          <h6><span style={{fontWeight: "bold", fontSize: "22px"}}>Location:</span>&nbsp;&nbsp;&nbsp;&nbsp;Dallas Ft. Worth
            Greater Metroplex</h6>
          <h6><span style={{fontWeight: "bold", fontSize: "22px"}}>Phone Number:</span>&nbsp;&nbsp;&nbsp;&nbsp;214-843-3748
          </h6>
          <h6><span
              style={{fontWeight: "bold", fontSize: "22px"}}>Email:</span>&nbsp;&nbsp;&nbsp;&nbsp;BrianLFarmerLLC@gmail.com
          </h6>
        </div>
        {/* column on the richt side of about me section with icons */}
        <div className="col-8 col-lg-5 col-xl-4 mt-5 mt-lg-0 pl-0 ml-0 pl-lg-5 ml-lg-5" id="aboutMeIcons">
          <div className="row justify-content-center">
            {/* line of text above the icons */}
            <h3 className="col-12 col-lg-9 mb-5" style={{textAlign:"center"}}>Skilled With The Use Of:</h3>

            {/* Force next columns to break to new line */}
            <div className="w-100 d-none d-md-block"></div>
            {/* top row of icons*/}
            <img src="https://img.icons8.com/ios/100/000000/html-5.png" alt="icon for html5" className="col-3"/>
            <img src="https://img.icons8.com/carbon-copy/100/000000/4-c.png" alt="icon for bootstrap 4" className="col-3"/>
            <img src="https://img.icons8.com/ios-filled/100/000000/css.png" alt="icon for css" className="col-3"/>
            <img src="https://img.icons8.com/ios/100/000000/javascript-logo.png" alt="icon for javascript"
              className="col-3"/>

            {/* Force next columns to break to new line */}
            <div className="w-100 d-none d-md-block"></div>
            {/* bottom row of icons */}
            <img src="https://img.icons8.com/windows/96/000000/nodejs.png" alt="icon for node" className="col-3 mt-5"/>
            <img src="https://img.icons8.com/ios-filled/100/000000/mysql-logo.png" alt="icon for mysql"
              className="col-3 mt-5"/>
            <img src="https://img.icons8.com/carbon-copy/100/000000/adobe-photoshop.png" alt="icon for photoshop"
              className="col-3 mt-5"/>
            <img src="https://img.icons8.com/ios/100/000000/design.png" alt="icon for web design" className="col-3 mt-5"/>
          </div>
        </div>
      </div>
    </section>
    )
}

export default About
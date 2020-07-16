import React from "react"
import "./Contact.css"
import laptop from "../../assets/icons/laptop.png"

function Contact() {
 return (
    <section className="container-fluid" id="contactSection">
      <div className="row justify-content-center">
        <div className="col">
          <h2 style={{fontFamily: "'Merriweather', serif"}}>Contact Me</h2>
        </div>
        <div className="w-100"></div>
        <img alt="icon brackets" className="codingIcon" src={laptop} />
      </div>
        {/* empty h4 to generate thank you after email submit */}
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h4 id="thankYou" style={{textAlign: "center", fontFamily: "'Merriweather', serif"}}></h4>
      <div className="row justify-content-center" id="formRow">
        <form name="contact" method="post" className="col-sm-8 col-md-8 col-lg-6" id="contactForm">
        {/* hidden input field */}
        <input type="hidden" name="form-name" value="contact" />
          <div className="row form-group">
            <div className="col-6">
              <input name="firstName" id="firstName" type="text" className="form-control" placeholder="Your First Name*"/>
            </div>
            <div className="col-6">
              <input name="lastName" id="lastName" type="text" className="form-control" placeholder="Your Last Name*"/>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-6">
              <input name="email" id="email" type="text" className="form-control" placeholder="Your Email*"/>
            </div>
            <div className="col-6">
              <input name="phone" id="phone" type="text" className="form-control" placeholder="Your Number*"/>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-12">
              <textarea name="message" id="body" type="text" className="form-control" rows="8" placeholder="Your Message*"></textarea>
            </div>
          </div>
          <button id="contactSubmit" type="submit" className="button">Submit</button>
        </form>
      </div>
    </section>
 )   
}

export default Contact
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "./Footer.css"

let today = new Date()
let year = today.getFullYear()

function Footer(){
    return (
        <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify mr-5">This site my personal Bio/Portfolio - It is an ever-changing work in progress as
                I continue to work towards developing my skills with HTML-5, Java, CSS and anything else I can incorporate
                in the site.
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Page Links</h6>
              <ul className="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="#aboutMe">About Me</a></li>
                <li><a href="#portfolioSection">Portfolio</a></li>
                <li><a href="#contactSection">Contact Me</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr style={{borderTopColor: "rgba(241, 244, 247, 0.808)"}}/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <p className="copyright-text">Copyright &copy; <span id="copyright">2020-{year}</span> All Rights Reserved by
                <a href="https://github.com/brianlfarmerllc" target="blank">BrianLFarmerLLC</a>
              </p>
            </div>
    
            <div className="col-md-4 col-sm-12 col-xs-12">
              <ul className="social-icons">
                <li><a className="github" href="https://www.github.com/brianlfarmerllc/" target="blank"><i
                      className="fa fa-github"></i></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/in/BrianLFarmerLLC" target="blank"><i
                      className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}
    
export default Footer
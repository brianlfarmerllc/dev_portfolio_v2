import React from "react";
import "./hero.css"

function Hero() {
    return (
        <section className="container" id="aboveFold">
            <div className="row justify-content-center justify-content-md-around" id="heroRow">
                {/* column for info text in hero section */}
                <div className="col-12 col-md-7 col-lg-6" id="introText">
                    <h2>Hi! My name is Brian</h2>
                    <h4>and I'm a Full Stack Developer.</h4>
                    <h2>See that guy there?</h2>
                    <h4>Well... thats Me!</h4>
                    {/* row for the navigation buttons to CV and Portfolio  */}
                    <div className="row mt-5" id="buttonRow">
                        <div className=" col-6">
                            <a className="button" id="portButton" href="#portfolioSection"
                                role="button" style={{ textDecoration: "none" }}>
                                MyPortfolio</a>
                        </div>
                        {/* button link to portfolio currently disabled until I create a resume  */}
                        {/* <div className=" col-6 col-sm-5 col-md-6 col-lg-6 col-xl-5">
                         <a className="button" id="cvButton" href="#" role="button"
                        style="text-decoration: none; display: none;">Download My CV </a>
                        </div> */}
                    </div>
                </div>
                {/* column for image in hero section */}
                <div className="col-8 col-md-5 mt-5 mt-md-0" id="mainPhoto">
                    <img src="/assets/biophoto1.jpeg" 
                    alt="Brian sitting at table outside with computer" 
                    id="brianTable" />
                </div>
            </div>
        </section>
    )
}

export default Hero
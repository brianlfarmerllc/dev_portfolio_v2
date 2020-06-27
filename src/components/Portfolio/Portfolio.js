/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import portfoliocopy from "../../db/portfolio copy.json"
import portfolio from "../../db/portfolio.json"
import "./Portfolio.css"
import PortfolioTiles from "../PortfolioTiles/PortfolioTiles"
import dev from "../../assets/icons/developer.png"

function Portfolio() {
    const [portfolioState, setPortfolioState] = useState(portfoliocopy[3].reactApps);
    const [currentItemState, setCurrentItemState] = useState("React Apps");

    const handleClick = event => {
        event.preventDefault()
        const name = event.target.name
        switch (name) {
            case "React Apps":
                setPortfolioState(portfoliocopy[3].reactApps)
                setCurrentItemState("Full Stack")
                break;
            case "Full Stack":
                setPortfolioState(portfoliocopy[0].fullStack)
                setCurrentItemState("Full Stack")
                break;
            case "Browser Apps":
                setPortfolioState(portfoliocopy[1].browserApps)
                setCurrentItemState("Browser Apps")
                break;
            case "CLI Apps":
                setPortfolioState(portfoliocopy[2].cliApps)
                setCurrentItemState("CLI Apps")
                break;

            default:
                return
        }
    }

    return (
        // section for portfolio
        <section className="container-fluid" id="portfolioSection">
            <div className="row justify-content-center">
                <div className="col">
                    <h2 style={{ fontFamily: "'Merriweather', serif" }}>Portfolio</h2>
                </div>
                <div className="w-100"></div>
                <img alt="icon brackets" className="codingIcon"
                    src={dev} />
            </div>

            <div className="row justify-content-center ml-1 mr-1 ml-m-0 mr-m-0">
                {/* line of text above the icons */}
                <ul className="nav justify-content-md-end justify-content-center">
                    <span>var portfolio = [</span>
                    <li> <a
                        className="list-item"
                        href="#"
                        name="React Apps"
                        style={{ color: currentItemState === "React Apps" ? "dodgerblue" : "black" }}
                        onClick={handleClick}>React Apps</a> </li>
                    <li> <a
                        className="list-item"
                        href="#"
                        name="Full Stack"
                        style={{ color: currentItemState === "Full Stack" ? "dodgerblue" : "black" }}
                        onClick={handleClick}>Full Stack</a> </li>
                    <li> <a
                        className="list-item"
                        href="#"
                        name="Browser Apps"
                        style={{ color: currentItemState === "Browser Apps" ? "dodgerblue" : "black" }}
                        onClick={handleClick}>Browser Apps</a> </li>
                    <li> <a
                        className="list-item"
                        href="#"
                        name="CLI Apps"
                        style={{ color: currentItemState === "CLI Apps" ? "dodgerblue" : "black" }}
                        onClick={handleClick}>CLI Apps</a> </li>
                    <span >]</span>
                </ul>
            </div>
            <div className="row justify-content-center text-center ml-0 mr-0 ml-xl-2 mr-xl-2">
                {/* Force next columns to break to new line */}
                <div className="w-100 d-none d-md-block"></div>
                {portfolioState.map(item => (
                    <PortfolioTiles
                        key={item.name}
                        name={item.name}
                        image={item.image}
                        imageAlt={item.imageAlt}
                        site={item.site}
                        icon={item.icon}
                        iconAlt={item.iconAlt}
                        type={item.type}
                        github={item.github} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio
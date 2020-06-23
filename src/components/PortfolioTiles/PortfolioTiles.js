import React from "react"
import portfolio from "../../db/portfolio.json"

function PortfolioTiles() {
    return (
        <>
            {portfolio.map(item => (
                <div key={item.name} className="col-10 col-sm-8 col-md-5 col-lg-3 pr-0 pl-0 mt-5 tile" style={{ position: "relative"}}>
                    <img src={item.image} alt={item.imageAlt} style={{ width: "100%" }} />
                    <div className="box">
                        <a href={item.site} target="blank">
                            <h5 style={{ textAlign: "center" }}>{item.name}</h5>
                        </a>
                        <img src={item.icon} alt={item.iconAlt} className="tileIcon text-center" />
                        <p>{item.type}</p>
                        <a href={item.github} target="blank">
                            <h5 style={{ textAlign: "center" }}>View GitHub</h5>
                        </a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PortfolioTiles
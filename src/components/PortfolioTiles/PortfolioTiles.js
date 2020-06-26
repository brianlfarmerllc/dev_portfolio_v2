import React from "react"




function PortfolioTiles(props) {
    
   

    return (
        <>
            
                <div key={props.name} className="col-10 col-sm-8 col-md-5 col-lg-3 pr-0 pl-0 mt-5 tile" style={{ position: "relative"}}>
                    <img src={require(`../../assets/${props.image}.jpg`)} alt={props.imageAlt} style={{ width: "100%" }} />
                    <div className="box">
                        <a href={props.site} target="blank">
                            <h5 style={{ textAlign: "center" }}>{props.name}</h5>
                        </a>
                        <img src={props.icon} alt={props.iconAlt} className="tileIcon text-center" />
                        <p>{props.type}</p>
                        <a href={props.github} target="blank">
                            <h5 style={{ textAlign: "center" }}>View GitHub</h5>
                        </a>
                    </div>
                </div>
            
        </>
    )
}

export default PortfolioTiles
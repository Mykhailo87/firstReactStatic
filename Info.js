import React from "react";

export default function Info() {
    return (
          <div className="info">
            <img className="info-foto" src="./my-foto.jpg" alt="My Foto"></img>
            <h3 className="info-name">Mykhailo Ovcharenko</h3>
            <h5 className="info-profesion">Frondend Developer</h5>
            <h6 className="info-web">MyOwn.website</h6>
            <div className="info-button">
                <img className="but-img"  src="./Mail.png"></img>
                Email
             </div>
          </div>  
    )
}

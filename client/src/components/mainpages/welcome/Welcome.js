import React from "react";
import './Welcome.css'
// import logo from "./logo.png";
import bg from "./bg.png";
import {Link} from 'react-router-dom'
const Welcome = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "96vw",
          height: "80vh",
        }}
      >
       
        
      <div className="para">
      YOU ARE ALMOST WELCOME IN :
      </div>
      <div className="welcome">
      <Link to="/product"><button id="btn-welcome">Check Our Product</button></Link>
        </div>
      <div className="titre">
          <p>Café & Resto <br></br><span style={{paddingLeft:"120px"}}>707</span></p>
      </div>
     
       
       
      </div>

      
    </div>
  );
};

export default Welcome;

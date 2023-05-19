import React, { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import "./Main.css";
import axios from "axios";
import Map from '../Map/Map';
import Meteo from '../Meteo/Meteo';



function Main (){


  // const black = [0, 0, 0];
  // const purple = [88, 52, 133];
  // const orange = [232, 131, 72];
  // const blue = [45, 221, 227];

  // BLANC ROSE VERT 
  const black = [255, 255, 255]; 
  const purple = [255, 166, 158];
  const orange = [217, 3, 104];
  const blue = [132, 220, 198];
  
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }
  
  function lerpColor(from, to, startTime, endTime, hour) {
    const lerpAmt = (hour - startTime) / (endTime - startTime);
    const lerped = [];
    for (let i = 0; i < 3; i++) {
      lerped[i] = lerp(from[i], to[i], lerpAmt);
    }
    return lerped;
  }
  
  function setColours() {
    const now = new Date();
    // const hour = now.getHours();
    const hour = 20;
    // const min = now.getMinutes();
    // const sec = now.getSeconds();  
    let first = document.getElementById("main")
  
    let currentColor;
  
    if (hour >= 0 && hour <= 4.5) {
      currentColor = lerpColor(black, purple, 0, 4.5, hour);
    } else if (hour > 4.5 && hour <= 5.5) {
      currentColor = lerpColor(purple, orange, 4.5, 5.5, hour);
    } else if (hour > 5.5 && hour <= 12) {
      currentColor = lerpColor(orange, blue, 5.5, 12, hour);
    } else if (hour > 12 && hour <= 18.5) {
      currentColor = lerpColor(blue, orange, 12, 18.5, hour);
    } else if (hour > 18.5 && hour <= 19.5) {
      currentColor = lerpColor(orange, purple, 18.5, 19.5, hour);
    } else if (hour > 19.5 && hour <= 24) {
      currentColor = lerpColor(purple, black, 19.5, 24, hour);
    }
  
    const colorString = `rgb(${Math.round(currentColor[0])},${Math.round(
      currentColor[1]
    )},${Math.round(currentColor[2])})`;
    
   first.style.background = colorString;
  }
  setInterval(setColours)
  

  return (
    <><section id="main">

    {/* <div className="main-container-morning"> */}
        {/* <section className="pollution"> */}
          {/* <p>ici la qualité de l'air parisien :&#41;</p> */}
        {/* </section> */}
          <div className="map">
          <Map>  </Map>
          </div>

          <div className="meteotemp">
            <Meteo></Meteo>
            <p id="Meteo"><Meteo></Meteo></p>
            <p id="Pluie"></p>
          </div>

          
      </section>

        {/* <h3 id="titreMap">Espaces verts 75010</h3> */}
        {/* <section className="map">
        
          // <Map> </Map>

        </section> */}
        
      {/* </div> */}
      
      </>
    )
}




export default Main ; 

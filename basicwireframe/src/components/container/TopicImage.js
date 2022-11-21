import React from "react";
import './svg.css';
import './round.css';
const TopicImage = (props) => {
  

    return (

//  <svg viewBox="0 0 340 333">

// <path className="path" style={{fill :"white",stroke :"black", strokeWidth:"4", d:"M66.039,133.545c0,0-21-57,18-67s49-4,65,8
// s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
// C46.039,146.545,53.039,128.545,66.039,133.545z"}} />
// </svg>
    
        <div>
          <h1> TopicImage {props.selectedtopic} </h1>
          <div className="round"> 
            <span style={`--i: +${'1'}`}><img src= {props.selectedtopic+"Image.jpg"}  alt="11111"/></span>
            <span style={`--i: +${'2'}`}><img src= {props.selectedtopic+"Image.jpg"}  alt="11111"/></span>
            <span style={`--i: +${'3'}`}><img src= {props.selectedtopic+"Image.jpg"}  alt="11111"/></span>
          </div>

      </div>
    
    );
  };
  
  export default TopicImage;
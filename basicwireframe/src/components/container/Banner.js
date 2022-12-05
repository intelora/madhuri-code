import React from "react";

const Banner = (props) => {
 
  
  return (
    <div>
       {/* < div> code for animated default banner, correct svg and corract timings
      
          <svg  id="frame-01"className="frame-01" style={{width:"100", height:"100"}}>
            <circle style={{cx:"50", cy:"50", r:"40", stroke:"green", strokeWidth:"4", fill:"yellow"}}/>
          </svg>
       
       <svg id="frame-02" className="frame-02" width="300" height="200">
         <polygon points="100,10 40,198 190,78 10,78 160,198"/>
        </svg>

      <svg id="frame-03" className="frame-03" width="400" height="110">
         <rect width="300" height="100" style={{fill:"rgb(0,0,255)",strokeWidth:"3",stroke:"rgb(0,0,0)"}} />
      </svg>
 

      <svg id="frame-04" className="frame-04" height="140" width="500">
       <ellipse cx="200" cy="80" rx="100" ry="50"
         style={{fill:"red",stroke:"purple",strokeWidth:"2"}}/>
      </svg>

      <svg id="frame-05" className="frame-05"height="500" width="500">
		    <polygon points="250,60 100,400 400,400" class="triangle" />
	   </svg>

     <svg id="frame-06" className="frame-06" height="140" width="500">
       <ellipse cx="200" cy="80" rx="100" ry="50"
         style={{fill:"pink",stroke:"purple",strokeWidth:"2"}}/>
      </svg>

      <svg  id="frame-07" className="frame-07" style={{width:"100", height:"100"}}>
        <circle style={{cx:"50", cy:"50", r:"40", stroke:"green", strokeWidth:"4", fill:"orange"}}/>
     </svg>
    </div> */}


      <div
        id="fh5co-header"
        className={props.selectedtopicid+props.selectedMenu? "fh5co-cover transitionCSS"+props.selectedtopicid+props.selectedMenu:"fh5co-cover"}
        role="banner"
        style={{ backgroundImage: `url(${"images/"+props.selectedtopicid+props.selectedMenu+".jpg"})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div
                className="display-t"
                style={{ margin: "0px", height: "0px" }}
              >
                <div
                  className="display-tc animate-box"
                  data-animate-effect="fadeIn"
                  style={{ height: "100px" }}
                >
                  <h1 style={{ fontSize: "12px", color: "#ff9b1c" }}>&nbsp;</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="btn-onbox-position">&nbsp;</p>
      </div>
    </div>
  );
};

export default Banner;

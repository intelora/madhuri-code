import React from "react";
const Banner = (props) => {
 
  
  return (
    <div>
       {/* code for animated default banner, correct svg and corract timings */}
       <div>
       {/* <img src="./svg-files/svgpart-01.svg" id="frame-01" className="frame-01" alt="" />
       <img src="./svg-files/svgpart-02.svg" id="frame-02" className="frame-02" alt="" />
       <img src="./svg-files/svgpart-03.svg" id="frame-03" className="frame-03" alt="" />
       <img src="./svg-files/svgpart-04.svg" id="frame-04" className="frame-04" alt="" />
       <img src="./svg-files/svgpart-05.svg" id="frame-05" className="frame-05" alt="" />
       <img src="./svg-files/svgpart-06.svg" id="frame-06" className="frame-06" alt="" />
       <img src="./svg-files/svgpart-07.svg" id="frame-07" className="frame-07" alt="" />
       <img src="./svg-files/svgpart-08.svg" id="frame-08" className="frame-08" alt="" />
       <img src="./svg-files/svgpart-09.svg" id="frame-09" className="frame-09" alt="" />
       <img src="./svg-files/svgpart-10.svg" id="frame-10" className="frame-10" alt="" /> */}


    </div> 


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

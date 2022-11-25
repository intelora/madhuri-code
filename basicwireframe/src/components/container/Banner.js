import React from "react";

const Banner = (props) => {
 
  
  return (
    <div>
      <div
        id="fh5co-header"
        className="fh5co-cover"
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

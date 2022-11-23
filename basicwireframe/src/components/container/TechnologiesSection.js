import React from "react";
import technologies from '../../components/jsondata/sectionsjson/technologies.json';
import technologies2 from '../../components/jsondata/sectionsjson/technologies2.json';


const TechnologiesSection = () => {
   
    return (
        <div>
       <div id="fh5co-services" className="fh5co-bg-section">
		<div className="container">
			<div className="row row-eq-height">

				{technologies.map(technologies=>{
					return(
						<div className="col-md-3 text-center animate-box">
						<div className="services">
							<span style={{fontSize:"4em"}}><i className={technologies.icon} ></i></span>
							<h3>{technologies.title} </h3>
							<p>{technologies.content}</p>
						</div>
					</div>
					)
				})
			}
				
		<div class="row row-eq-height" style={{marginTop:"2em"}}>
               {technologies2.map(technologies2=>{
					return(
						<div class="col-md-6 animate-box text-center">
						<div class="services">
							<h3>{technologies2.title}</h3>
							<p>{technologies2.content}</p>
							<br/>
							<p><img alt="IntelOra - IT Software Solution Company - Technologies"  src={technologies2.image} style={{width: "100%"}}/></p>
						</div>
					</div>
					)
					})
					}
			  </div>			
		  </div>
	    </div>
      </div>
   </div>    
    );
  };
  
  export default TechnologiesSection;
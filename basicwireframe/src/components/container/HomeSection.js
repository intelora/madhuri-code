import React from "react";
import home from "../../components/jsondata/sectionsjson/home.json";
import home2 from "../../components/jsondata/sectionsjson/home2.json";


const Section = () => {
	
   let iCnt = 0;
    return (
        <div>
          
  <div id="fh5co-services" className="fh5co-bg-section">
		<div className="container">	
			{ 
				home.map(homeData=>{
				return(<div>
					
					<div className="col-md-4 text-center animate-box">
					  <div className="services">
						  	<span style={{fontSize:"4em"}}></span>
							<div key={homeData.id} >
								<h3>{homeData.title}</h3> 
								<div dangerouslySetInnerHTML={{__html: homeData.content}}  />
								<p><a href="./services.html" className="btn btn-primary btn-outline btn-sm">{homeData.button} <i className="icon-fast-forward"></i></a></p>
							</div>
						</div>
					</div>
					
								</div>)
							 })
							
						  }
			     </div>
		    </div>
			
<div id="fh5co-testimonial" className="fh5co-bg-section">
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-7 col-md-offset-2 text-center fh5co-heading">
					<h2>{home2.title}</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<div className="row animate-box">
                         {home2.contentData.map(homesData=>{
                          return(
							   <div className="item">
                                   <div className="testimony-slide active text-center">
                                      <figure>
                                        <div className="clientlogo" key={homesData.id}><img alt="IntelOra - IT Software Solution Company" src={homesData.image}/>&nbsp;</div>
                                      </figure>
								 </div>
							 </div>
							 )
						})
					}
                <span>Business Sector: <a href="#">{home2.para}</a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

 
    
	 
		 );
		};
		
		export default Section;
   
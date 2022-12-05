import React,{useEffect} from "react";
import home from "../../components/jsondata/sectionsjson/home.json";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Section = () => {
	// useEffect(() => {
    //     AOS.init();
    //   }, [])
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
					<h2>Our Team Clients Experience</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<div className="row animate-box">
						<div className="owl-carousel owl-carousel-fullwidth">
							<div className="item">
								<div className="testimony-slide active text-center">
									<figure>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-001.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-002.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-003.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-004.png" />&nbsp;</div>
									</figure>
									<figure>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-005.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-006.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-007.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-008.png" />&nbsp;</div>
									</figure>
									<span>Business Sector: <a href="#">Banking, Finance, Credit & Risk, E-Commerce, Telecom</a></span>
									<blockquote>
									</blockquote>
								</div>
							</div>

                            <div className="item">
								<div className="testimony-slide active text-center">
									<figure>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-009.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-010.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-011.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-012.png" />&nbsp;</div>
									</figure>
									<figure>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-013.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-014.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-015.png" />&nbsp;</div>
										<div className="clientlogo"><img alt="IntelOra - IT Software Solution Company" src="images/client-016.png" />&nbsp;</div>
									</figure>
									<span>Business Sector: <a href="#">Banking, Finance, Credit & Risk, E-Commerce, Telecom</a></span>
									<blockquote>
									</blockquote>
								</div>
							</div>						
						</div>
					</div>
				</div>
			</div>


		</div>
	</div>

 </div>
    
	 
		 );
		};
		
		export default Section;
   
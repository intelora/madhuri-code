import React from "react";
import page from "../../components/jsondata/page.json";

const Section = () => {
   
    return (
        <div>
          
  <div id="fh5co-services" className="fh5co-bg-section">
		<div className="container">	

			<div className="row row-eq-height">

				  <div className="col-md-4 text-center animate-box">
					  <div className="services">
						  <span style={{fontSize:"4em"}}></span>
						  <h3>Company Profile</h3>
						  {
							page.map(pageData=>{
								return(
									<div>
									<h1>{pageData.title}</h1>
									<p>{pageData.company}</p>
									<p>{pageData.service}</p>
									
								  </div>
						
								)
							 })
						  }
						  
					  </div>
				  </div>

        <div className="col-md-4 text-center animate-box">
					<div className="services">
						<span style={{fontSize:"4em"}}></span>
						<h3>Providing services</h3>
						<p>Our services include <b>Designing, Building Architecture, Implementation</b> with improving timely monotring. We work for delivering competitiveness along with proper quality reviews.</p>
						<p>IntelOra believes Designing IT solutions and Architecting is competencies with strategy, Planing & Consulting values.</p>
						<p>We work keeping clocks and watches away, for 24 Hrs a day and 365 days of year. We ensure 
						our Clients can connect & talk with them during clients working hours by just single click, same as next to desk. Result, of course is the NO REMOTE RESOURCES.</p>
						<br/>
						<p><a href="./services.html" className="btn btn-primary btn-outline btn-sm">Services <i className="icon-fast-forward"></i></a></p>
					</div>
				</div>

        <div className="col-md-4 text-center animate-box">
					<div className="services">
						<span style={{fontSize:"4em"}}></span>
						<h3>Our expertise and services</h3>
						<p>
							<ul style={{textAlign:"left"}}>
								<li>Application Architect</li>
								<li>Solution Architect</li>
								<li>API Architect</li>
								<li>MicroService Architect</li>
								<li>BlockChain Architect</li>
								<li>Data Architect</li>
								<li>Cloud Architect</li>
								<li>AWS Architect</li>
								<li>Infrastructure Architect</li>
								<li>DevOps Architect</li>
								<li>HealthCare IT Architect</li>
								<li>Domain Driven Architecture</li>
								<li>IOT Architecture</li>
							</ul>
						</p>
						<br/>
						<p><a href="./technologies.html" className="btn btn-primary btn-outline btn-sm">Technologies <i className="icon-fast-forward"></i></a></p>
					</div>
				</div>
     </div>
     <div className="row row-eq-height" style={{marginTop:"4em"}}>
				<div className="col-md-6 animate-box text-center">
					<div className="services" >
						<h3>Advance Solutioning <br/>(Cloud, Integration, IOT, AI, Robotics )</h3>
						<p>IntelOra has the command, knowledge and confidence to provide the undoubted solution. We translate complex business and technology requirements into state-of-the-art, albeit easy-to-use solutions. Our emphasis on innovation and development of re-usable components and frameworks provides significant advantage and tangible value benefits to our clients.
                            This desire to innovate and contribute pervades throughout the company, and forms the basis of our modus operandi.</p>
						<br/>
						<p><a href="./solutions.html" className="btn btn-primary btn-outline btn-sm">Solutions<i className="icon-fast-forward"></i></a></p>
					</div>
				</div>
				<div className="col-md-6 animate-box text-center">
					<div className="services" >
						<h3>Quality Solution <br/> (MicroService, ETL, BPM, CMS Sites)</h3>
						<p>Quality Assurance is an essential part of any project, which ensures the top quality of our solutions. We pay special attention to the quality assurance of the products and services we deliver. We believe that this is the best way to make products work as effectively as possible. Our clients can rely on our products working stably and as designed because we put an emphasis on quality assurance as a key factor in project success.</p>
						<br/>
						<p><a href="./methodology.html" className="btn btn-primary btn-outline btn-sm">Methodology<i className="icon-fast-forward"></i></a></p>
					</div>
				</div>
			</div>			
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
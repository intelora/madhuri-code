import React from "react";
import service from '../../components/jsondata/service.json';

const ServicesSection = () => {
 return (
<div>
  <div id="fh5co-gallery">
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<h2>Our Services</h2>
					<h3 className="activeColor">DEVELOPMENT | SUPPORT | MAINTENANCE</h3>
				</div>
			</div>
		</div>


    <div className="container-fluid">
			<div className="row row-bottom-padded-md">
				<div className="col-md-12">
					<div className="modal fade" id="model01">
						<div className="modal-dialog">
							<div className="modal-content"></div>
						</div>
					</div>
					<div className="modal fade" id="model02">
						<div className="modal-dialog">
							<div className="modal-content"></div>
						</div>
					</div>
					<ul id="fh5co-portfolio-list">
						{service.map(service=>{
							return(
								<div>
                             <li className="one-third animate-box" data-animate-effect="fadeIn"  style ={{ backgroundImage: `url(${service.image})`}}>
							<a href="./modal-applicationdevelopment.html">
								<div className="case-studies-summary">
									<h2 style={{backgroundColor:"#379637"}} >{service.title}</h2>
								</div>
							</a> 
						</li>
								</div>
							)
						})}
					</ul>		
				</div>
			</div>
		</div>
	</div>
 </div>

        
    
    );
  };
  
  export default ServicesSection;
import React from "react";
import product from "../../components/jsondata/sectionsjson/product.json";
//import '../../components/animation.css';

const ProductsSection = () => {
   
    return (
   
    <div id="fh5co-services" className="fh5co-bg-section">
	
		<div className="container">		
			<div className="row row-eq-height">
		
                  {product.map(product=>{
					return(
				  
				<div className="col-md-4 text-center animate-box" key={product.id}>
					  
					<div className="services">
						<span style={{fontSize:"4em"}}></span>
						<h3>{product.title}</h3>
						<p>{product.content}</p>
						<p><img src={product.image} alt="11111"className="divbox-img" id="divbox-img-paymentgateway"/></p>
						<p>{product.para} 
							<a href="./contact.html" className="btn btn-primary btn-outline btn-sm">{product.button} <i className="icon-fast-forward"></i></a>
						</p>
					</div>
				</div>
					)
				}
              )}
                
			</div>			
			</div>			
		</div>
	
	

    
    );
  };
  
  export default ProductsSection;
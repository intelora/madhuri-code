import React from "react";

const MenuBar = () => {
   
    return (
        <div >
          <div className="top-menu">
			<div className="container">
				<div className="row">
					<div className="col-xs-10 text-right menu-1" >
						<ul>
							<li className="active"><a href="index.html">Home</a></li>
							<li><a href="products.html">Products</a></li>
							<li><a href="services.html">Services</a></li>
							<li><a href="solutions.html">Solution</a></li>
							<li><a href="technologies.html">Technologies</a></li>
							<li><a href="contact.html#fh5co-contact">Contact</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
        </div>
    
    );
  };
  
  export default MenuBar;
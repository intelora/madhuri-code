import React from "react";

const Header = () => {
   
    return (
      <div>
           <nav className="fh5co-nav" role="navigation">
		<div className="top">
			<div className="container">
				<div className="row" style ={{marginLeft: "-110px"}}>
				<div className="col-xs-2">
						<div id="fh5co-logo" className="logo"><a href="index.html"><img src="./images/LogoBanner.png" alt="3333"/></a></div>
					</div>
					<div className="col-xs-10">
						<ul className="fh5co-social"  style={{float:"right"}}>
							<li><a href="https://intelora.tumblr.com"><i className="icon-tumblr"></i></a></li>
							<li><a href="https://in.pinterest.com/intelorar"><i className="icon-pinterest"></i></a></li>
							<li><a href="https://www.instagram.com/intelora.r.d"><i className="icon-instagram"></i></a></li>
							<li><a href="https://twitter.com/Intelora1"><i className="icon-twitter"></i></a></li>
							<li><a href="https://www.facebook.com/director.intelora"><i className="icon-facebook"></i></a></li>
							<li><a href="https://www.linkedin.com/company/intelora"><i className="icon-linkedin"></i></a></li>
						</ul>
						<p className="num text-right" style={{float:"right"}}>Call: (0091)-930-604-9136</p>
					</div>
				</div>
			</div>
		</div>
   </nav>
</div>
    );
  };
  
  export default Header;
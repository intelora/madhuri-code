import React from "react";

const Footer = () => {
  const footerImage = 'images/img_bg_1.jpg';
 
   
    return (
      <div>
     <footer id="fh5co-footer" className="fh5co-bg" style ={{ backgroundImage: `url(${footerImage})`}} role="contentinfo">
      <div className="overlay"></div>
      <div className="container">
        <div className="row row-pb-md">
          <div className="col-md-4 fh5co-widget">
            <h3>IntelOra Resources & Developments (IntelOra)</h3>
            <p>IntelOra Resources & Developments is one of the fastest upcoming providers of Software Services and Solutions.</p>
            <p><a className="btn btn-primary" href="./contact.html#fh5co-contact">Write Us Inquiry</a></p>
          </div>
          <div className="col-md-8">
            <h3>Our Services</h3>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <ul className="fh5co-footer-links">
                <li><a href="https://intelora.co.in/en/modal-applicationdevelopment.html">Applications Development</a></li>
                <li><a href="https://intelora.co.in/en/modal-cloudsolution.html">Web Development</a></li>
                <li><a href="https://intelora.co.in/en/modal-mobileappdevelopment.html">Mobile Apps Development</a></li>
                <li><a href="https://intelora.co.in/en/modal-portaldevelopment.html">Portal Development</a></li>
                <li><a href="https://intelora.co.in/en/modal-webdesigndevelopment.html">Web Designing</a></li>
                <li><a href="https://intelora.co.in/en/modal-cloudsolution.html">Cloud Solution</a></li>
                <li><a href="https://intelora.co.in/en/modal-blockchaindev.html">Blockchain Solution</a></li>
              </ul>
            </div>
  
            <div className="col-md-4 col-sm-4 col-xs-6">
              <ul className="fh5co-footer-links">
                <li><a href="https://intelora.co.in/en/modal-artificialintelligencebigdata.html">Big Data Solution</a></li>
                <li><a href="https://intelora.co.in/en/modal-iotsolution.html">IOT solution</a></li>
                <li><a href="https://intelora.co.in/en/modal-microserviessolutions.html">MicroService Solution</a></li>
                <li><a href="https://intelora.co.in/en/payment-gateway-integration.html">Payment Gateway</a></li>
                <li><a href="https://intelora.co.in/en/modal-devopssolution.html">Deployment</a></li>
                <li><a href="https://intelora.co.in/en/modal-gamingdevelopment.html">Gaming solution?PixiJs</a></li>
                <li><a href="https://intelora.co.in/en/modal-arvrsolution.html">AR-VR Solution</a></li>
              </ul>
            </div>
  
            <div className="col-md-4 col-sm-4 col-xs-6">
              <ul className="fh5co-footer-links">
                
                <li><a href="https://intelora.co.in/en/ecommerce-solution-providers.html">E-Commerce solution</a></li>
                <li><a href="https://intelora.co.in/en/modal-roboticsdev.html">Robitics</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="row copyright">
          <div className="col-md-12 text-center">
            <p>
              <small className="block">&copy; 2019, IntelOra Resources & Developments LLP. All Rights Reserved.</small> 
              <small className="block">Website Developed by <a href="http://intelora.co.in" >IntelOra Resources & Developments </a> India </small>
            </p>
            
              <ul className="fh5co-social-icons">
                <li><a href="https://www.google.com/"><i className="icon-google"></i></a></li>
                <li><a href="https://intelora.tumblr.com"><i className="icon-tumblr"></i></a></li>
                <li><a href="https://in.pinterest.com/intelorar"><i className="icon-pinterest"></i></a></li>
                <li><a href="https://www.instagram.com/intelora.r.d"><i className="icon-instagram"></i></a></li>
                <li><a href="https://twitter.com/InteloraRnD"><i className="icon-twitter"></i></a></li>
                <li><a href="https://www.facebook.com/director.intelora"><i className="icon-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/in/director-intelora"><i className="icon-linkedin"></i></a></li>
              </ul>
            
          </div>
        </div>
      </div>
    </footer>
    </div>
    );
  };
  
  export default Footer;
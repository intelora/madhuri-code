import React from "react";
import appdevelop from '../../components/jsondata/modalsjson/appdevelop.json';
import artificial from '../../components/jsondata/modalsjson/artificial.json';
import arvrsolution from '../../components/jsondata/modalsjson/arvrsolution.json';
import blockchain from '../../components/jsondata/modalsjson/blockchain.json';
import cloudsolution from '../../components/jsondata/modalsjson/cloudsolution.json';
import gamingdevelopment from '../../components/jsondata/modalsjson/gamingdevelopment.json';
import microservice from '../../components/jsondata/modalsjson/microservice.json';
import devopssolution from '../../components/jsondata/modalsjson/devopssolution.json';
import iotsolution from '../../components/jsondata/modalsjson/iotsolution.json';
import sapsolution from '../../components/jsondata/modalsjson/sapsolution.json';
import mobileappdevelop from '../../components/jsondata/modalsjson/mobileappdevelop.json';
import portaldevelop from '../../components/jsondata/modalsjson/portaldevelop.json';
import webdesign from '../../components/jsondata/modalsjson/webdesign.json';
import roboticsdev from '../../components/jsondata/modalsjson/roboticsdev.json';
import productenhancement from '../../components/jsondata/modalsjson/productenhancement.json';





const TopicInformation = (props) => {
   
  
    return (
        <div>
          

		<div id="fh5co-services" className="fh5co-bg-section">
			<div className="container">	
				<div className="row">

					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
						<h2>{appdevelop.title}</h2>
					</div>
				</div>
                <div className="modelcontent">
                 { appdevelop.contentData.map(appdevelop=>{
                     return(
                      <div>

                   <h3>{appdevelop.subheading}</h3>
                    <div className="modeltext">
                        <p>{appdevelop.content}</p>
                        <a href="./contact.html#fh5co-contact" className="btn btn-primary popup">Write Query</a>
                    </div>

                        
                      </div>
                     )
                 })
                 }
            </div>
        </div>
   </div>
   </div>
    
    );
  };
  
  export default TopicInformation;
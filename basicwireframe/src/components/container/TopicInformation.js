import React,{useState, useEffect} from "react";
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
   
    const[sourceData, setSourceData] = useState(null);
    console.log("props.selectedtopicid=", props.selectedtopicid);
    
    useEffect(() => {
        console.log("useEffect got value");
        if(props.selectedtopicid==="appdevelop"){
            setSourceData(appdevelop);
        }else if(props.selectedtopicid==="cloudsolution"){
            setSourceData(cloudsolution);
        }else if(props.selectedtopicid==="blockchain"){
            setSourceData(blockchain);
        }else if(props.selectedtopicid==="roboticsdev"){
            setSourceData(roboticsdev);
        }else if(props.selectedtopicid==="artificial"){
            setSourceData(artificial);
        }else if(props.selectedtopicid==="iotsolution"){
            setSourceData(iotsolution);
        }else if(props.selectedtopicid==="arvrsolution"){
            setSourceData(arvrsolution);
        }else if(props.selectedtopicid==="gamingdevelopment"){
            setSourceData(gamingdevelopment);
        }else if(props.selectedtopicid==="microservice"){
            setSourceData(microservice);
        }else if(props.selectedtopicid==="devopssolution"){
            setSourceData(devopssolution);
        }else if(props.selectedtopicid==="sapsolution"){
            setSourceData(sapsolution);
        }else if(props.selectedtopicid==="mobileappdevelop"){
            setSourceData(mobileappdevelop);
        }else if(props.selectedtopicid==="portaldevelop"){
            setSourceData(portaldevelop);
        }else if(props.selectedtopicid==="productenhancement"){
            setSourceData(productenhancement);
        }else if(props.selectedtopicid==="webdesign"){
            setSourceData(webdesign);
        }
        else {
            setSourceData(appdevelop);
        } 
        
    });

    return (
            <div>
                <div id="fh5co-services" className="fh5co-bg-section">
                    <div className="container">	
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                                <h2>{sourceData && sourceData.title}</h2>
                            </div>
                        </div>
                        <div className="modelcontent">
                        {sourceData &&  sourceData.contentData.map(sourceDatas=>{
                            return(
                            <div>
                                <h3>{sourceDatas.subheading}</h3>
                                <div className="modeltext">
                                    <p>{sourceDatas.content}</p>
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
import React from 'react';
import contentData from '../components/jsondata/contentData.json';
// import image from "../../public/images/gallery-10.jpg";

const TopicComponent=()=>{

   
    return(
    <div>
     {
     contentData.map(contentData=>{
        return(
            <div>
            <h1>{contentData.title}</h1>
            <h2>{contentData.color}</h2>
            <img src={contentData.image}/>
            
          </div>

        )
     })
      
     }
        </div>         
    
    );
}
export default TopicComponent;

import React from 'react';
import contentData from '../components/jsondata/contentData.json';

const TopicComponent=()=>{

   
    return(
    <div>
     {
     contentData.map(contentData=>{
        return(
            <div>
            <h1>{contentData.title}</h1>
            <h2>{contentData.color}</h2>
            <img src={contentData.image} alt="aaaaa"/>
            
          </div>

        )
     })
      
     }
        </div>         
    
    );
}
export default TopicComponent;

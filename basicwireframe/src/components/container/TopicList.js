import React,{useState} from "react";

const TopicList = (props) => {


  const topicHandler=(topicId)=>{
    console.log('clicked topic='+topicId);
      props.setSelectedtopic(topicId);
    };
    
  

    return (
        <div>
          <h1> TopicList </h1>
          <ul>
            <li onClick={(e) => topicHandler('B1')}>topic1</li>
          </ul>

         < ul>
            <li onClick={(e) => topicHandler('B2')}>topic2</li>
          </ul>

          <ul>
            <li onClick={(e) => topicHandler('B3')}>topic3</li>
          </ul>

          <ul>
            <li onClick={(e) => topicHandler('B4')}>topic4</li>
          </ul>

        </div>
    
    );
  };
  
  export default TopicList;
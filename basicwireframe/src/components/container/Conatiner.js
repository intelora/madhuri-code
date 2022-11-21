import React,{useState} from "react";
import Section from "./Section";
import Banner from "./Banner";
import TopicImage from "./TopicImage";
import TopicInformation from "./TopicInformation";
import ContactUs from "./ContactUs";
import TopicList from "./TopicList";

const Container = (props) => {
  const [selectedtopic,setSelectedtopic]=useState("");

    return (
        <div>
        

          <h1> Container </h1>
          <Banner/>
          <Section/>
          <TopicList setSelectedtopic={setSelectedtopic} />
          <TopicImage  selectedtopic={selectedtopic}/>
          <TopicInformation selectedtopic={selectedtopic} />
          <ContactUs/>

        </div>
    
    );
  };
  
  export default Container;
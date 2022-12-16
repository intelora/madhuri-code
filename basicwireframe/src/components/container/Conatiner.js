import React,{useState} from "react";
import HomeSection from "./HomeSection";
import Banner from "./Banner";
import TopicInformation from "./TopicInformation";
import ContactUs from "./ContactUs";
import TopicList from "./TopicList";
import ProductsSection from "./ProductsSection";
import SolutionSection from "./SolutionSection";
import TechnologiesSection from "./TechnologiesSection";
import MenuBar from "../MenuBar";

const Container = (props) => {
  const [selectedtopicid,setSelectedtopicid]=useState("");
  const [selectedMenu,setSelectedMenu]=useState("");
    console.log("selectedtopicid= ", selectedtopicid, " selectedMenu= ", selectedMenu)
    return (
        <div>
          <MenuBar setSelectedMenu={setSelectedMenu} setSelectedtopicid={setSelectedtopicid} />
          <h1> Container </h1>
        <Banner selectedtopicid={selectedtopicid} selectedMenu={selectedMenu} />
       {(selectedMenu==null || selectedMenu==="") && <HomeSection/>}  
       {selectedMenu && selectedMenu==="Home" && <HomeSection/>}  
       {selectedMenu && selectedMenu==="Product" && <ProductsSection/>}          
       {selectedMenu && selectedMenu==="Solution" && <SolutionSection/>}
       {selectedMenu && selectedMenu==="Services" &&  selectedtopicid==="" && <TopicList setSelectedtopicid={setSelectedtopicid} />}
       {selectedtopicid && selectedtopicid!=="" && <TopicInformation selectedtopicid={selectedtopicid}/>}
       {selectedMenu && selectedMenu==="Technologies" && <TechnologiesSection/>}
       {selectedMenu && selectedMenu==="Contact" && <ContactUs/>}
       </div>
    
    );
  };
  
  export default Container;
import React,{useState} from "react";

const MenuBar = (props) => {
	const [activeMenu, setActiveMenu]=useState("");

    return (
        <div className="fh5co-nav">
          <div className="top-menu">
			<div className="container">
				<div className="row">
					<div className="col-xs-10 text-right menu-1" >
						<ul>
							<li className={activeMenu && activeMenu==="Home" ? "activeColor menuBar" : "menuBar"} onClick={()=>{props.setSelectedMenu("Home"); props.setSelectedtopicid(""); setActiveMenu("Home")} }>Home</li>
							<li className={activeMenu && activeMenu==="Product" ? "activeColor menuBar" : "menuBar"} onClick={()=>{props.setSelectedMenu("Product"); props.setSelectedtopicid(""); setActiveMenu("Product")}}>Products</li>
							<li className={activeMenu && activeMenu==="Services" ? "activeColor menuBar" : "menuBar"} onClick={()=>{props.setSelectedMenu("Services"); props.setSelectedtopicid(""); setActiveMenu("Services")}}>Services</li>
							<li className={activeMenu && activeMenu==="Solution" ? "activeColor menuBar" : "menuBar"}onClick={()=>{props.setSelectedMenu("Solution"); props.setSelectedtopicid(""); setActiveMenu("Solution")}}>Solution</li>
							<li className={activeMenu && activeMenu==="Technologies" ? "activeColor menuBar" : "menuBar"}onClick={()=>{props.setSelectedMenu("Technologies"); props.setSelectedtopicid(""); setActiveMenu("Technologies")}}>Technologies</li>
							<li className={activeMenu && activeMenu==="Contact" ? "activeColor menuBar" : "menuBar"} onClick={()=>{props.setSelectedMenu("Contact");props.setSelectedtopicid(""); setActiveMenu("Contact")}}>Contact</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    </div>
    
    );
  };
  
  export default MenuBar;
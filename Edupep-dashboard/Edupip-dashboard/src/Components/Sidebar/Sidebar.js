/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.scss';
import { useCookies } from 'react-cookie';

function Sidebar(props) {
    const [cookies, setCookie] = useCookies();
    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h3 className="text_none">adminDashboard</h3>
                </Link>
            </div>
            
            <div className="links">
                <ul>
      {  console.log(">>>>>>>>>>>>>>>>", cookies.menuData) }
   {cookies.menuData.map( menuRowData=>{
           return(     
                <div key={menuRowData.id}>
                  <Link to={menuRowData.menuurl} style={{ textDecoration: 'none' }}>
                        <li className={""+menuRowData.menuicon}>{menuRowData.menulabel}</li>  
                  </Link> 
                </div> 
                )
           })
      } 
         </ul>
    </div>
 </div>
    )
}

export default Sidebar;

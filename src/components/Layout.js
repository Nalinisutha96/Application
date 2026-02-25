import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout(){

 const [collapse,setCollapse] = useState(false);

 const toggleSidebar = ()=>{
  setCollapse(!collapse);
 }

 return(
  <div className="layout">

   <Sidebar collapse={collapse} toggle={toggleSidebar}/>

   <div className={collapse ? "main expand" : "main"}>
    <Header toggle={toggleSidebar}/>
    <Outlet/>
   </div>

  </div>
 )
}
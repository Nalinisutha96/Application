import { react,useState } from "react";

import DashboardContent from "../components/DashboardContent";

export default function Dashboard(){

 const [collapse,setCollapse] = useState(false);

 return(


 

   <div className="main">
   
    <DashboardContent/>
   </div>


 )
}
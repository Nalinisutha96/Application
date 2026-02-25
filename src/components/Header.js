import {
 FaBars,
 FaSearch,
 FaRegEnvelope,
 FaBell,
 FaTh
} from "react-icons/fa";

import profile from "../assests/images/profile.png";

export default function Header(){

 return(
  <div className="top-header sticky-top">

   {/* LEFT */}
   <div className="header-left">

  



    <p className="breadcrumb">
      Dashboards
      <span> &gt; </span>
      <b>Default</b>
    </p>

   </div>

   {/* RIGHT */}
   <div className="header-icons">

     <FaSearch/>
     <FaRegEnvelope/>
     <FaBell/>
     <FaTh/>

     <img src={profile} alt="profile"/>

   </div>

  </div>
 )
}
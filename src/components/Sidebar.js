import {
 FaChartBar,
 FaList,
 FaUser,
 FaCog,
 FaUsers,
 FaShieldAlt,
 FaStore,
 FaRobot,
 FaFileInvoice,
 FaEnvelope,
 FaShareAlt,

} from "react-icons/fa";
import toggleImg from "../assests/images/toggle.png";

export default function Sidebar({collapse,toggle}){

 return(
 <div className={collapse ? "sidebar collapse" : "sidebar"}>

   <div className="sidebar-top">

    <h2 className="logo-text">
      CONCEPS
    </h2>

    <img
     src={toggleImg}
     alt="toggle"
     className="toggle-img"
     onClick={toggle}
    />

   </div>

   {/* DASHBOARD */}
   <ul>
    <li>
      <FaChartBar/>
      <span>Dashboards</span>
    </li>
   </ul>

   {/* USER */}
   <p className="menu-title">USER</p>

   <ul>
    <li><FaList/><span>List</span></li>
    <li><FaUser/><span>Registration Form</span></li>
    <li><FaUser/><span>Public Profile</span></li>
    <li><FaCog/><span>My Account</span></li>
    <li><FaUsers/><span>Community</span></li>
    <li><FaUsers/><span>User Management</span></li>
    <li><FaShieldAlt/><span>Authentication</span></li>
   </ul>

   {/* APPS */}
   <p className="menu-title">APPS</p>

   <ul>
    <li><FaStore/><span>Store Client</span></li>
    <li><FaStore/><span>Store Admin</span></li>
    <li><FaStore/><span>Store Services</span></li>
    <li><FaRobot/><span>AI Prompt</span></li>
    <li><FaFileInvoice/><span>Invoice Generator</span></li>
    <li><FaEnvelope/><span>Email Client</span></li>
    <li><FaShareAlt/><span>Social Network</span></li>
   </ul>

  </div>
 )
}
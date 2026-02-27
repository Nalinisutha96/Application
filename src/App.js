import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OtpVerify from "./pages/OtpVerify";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import RegistrationForm from "./pages/RegistrationForm";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";




function App(){
 return(

   <Routes>

    {/* AUTH PAGES */}
<Route path="/" element={<SignUp/>}/>
<Route path="/signin" element={<SignIn/>}/>
<Route path="/otp" element={<OtpVerify/>}/>

    {/* COMMON LAYOUT */}
    <Route element={<Layout/>}>

      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/register" element={<RegistrationForm/>}/>
      <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/productdetail" element={<ProductDetail/>}/>

    </Route>

   </Routes>

 )
}

export default App;
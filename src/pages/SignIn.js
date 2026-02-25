import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assests/images/backgroundimage.png";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function SignIn(){

 const nav = useNavigate();

 const [form,setForm] = useState({
  email:"",
  password:""
 });

 const loginUser = ()=>{
   if(!form.email || !form.password){
     alert("All fields required");
   }
   else{
     nav("/otp");
   }
 }

 return(
  <div
   className="auth-bg"
   style={{backgroundImage:`url(${bgImage})`}}
  >

   <div className="auth-card">

    <h2>Sign In</h2>

    <p>
     Need an account?
     <span onClick={()=>nav("/signup")}>
       Sign Up
     </span>
    </p>

    <div className="social-btns">

      <button className="google">
        <FcGoogle size={20}/> Use Google
      </button>

      <button className="apple">
        <FaApple size={20}/> Use Apple
      </button>

    </div>

    <div className="divider">OR</div>

    <label>Email</label>
    <input
     type="email"
     placeholder="email@email.com"
     onChange={(e)=>setForm({...form,email:e.target.value})}
    />

    <div className="password-head">
      <label>Password</label>
      <span className="forgot">
        Forgot Password?
      </span>
    </div>

    <div className="password-box">
      <input
       type="password"
       placeholder="Enter Password"
       onChange={(e)=>setForm({...form,password:e.target.value})}
      />
      <FaEye className="eye"/>
    </div>

    <div className="terms">
      <input type="checkbox"/>
      <p>Remember me</p>
    </div>

    <button className="submit"
     onClick={loginUser}>
     Sign In
    </button>

   </div>

  </div>
 )
}
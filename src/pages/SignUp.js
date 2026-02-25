import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assests/images/backgroundimage.png";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function SignUp(){

 const nav = useNavigate();

 const [form,setForm] = useState({
  email:"",
  password:"",
  confirm:""
 });

 const submitForm = ()=>{
   if(!form.email || !form.password || !form.confirm){
     alert("All fields required");
   }
   else{
     nav("/");
   }
 }

 return(
  <div
   className="auth-bg"
   style={{backgroundImage:`url(${bgImage})`}}
  >

   <div className="auth-card">

    <h2>Sign Up</h2>

    <p>
     Already have an account?
     <span onClick={()=>nav("/")}>
       Sign In
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

    <label>Password</label>
    <div className="password-box">
      <input
       type="password"
       placeholder="Enter Password"
       onChange={(e)=>setForm({...form,password:e.target.value})}
      />
      <FaEye className="eye"/>
    </div>

    <label>Confirm Password</label>
    <div className="password-box">
      <input
       type="password"
       placeholder="Re-enter Password"
       onChange={(e)=>setForm({...form,confirm:e.target.value})}
      />
      <FaEye className="eye"/>
    </div>

    <div className="terms">
      <input type="checkbox"/>
      <p>I accept <span>Terms & Conditions</span></p>
    </div>

    <button className="submit"
     onClick={submitForm}>
     Sign Up
    </button>

   </div>

  </div>
 )
}
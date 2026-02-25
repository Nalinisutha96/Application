import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assests/images/backgroundimage.png";
import { FaMobileAlt } from "react-icons/fa";

export default function OtpVerify(){

 const nav = useNavigate();

 const inputRefs = [
  useRef(null),
  useRef(null),
  useRef(null),
  useRef(null),
  useRef(null),
  useRef(null)
 ];

 const handleChange = (e,index)=>{
   const value = e.target.value;

   if(value.length === 1 && index < 5){
     inputRefs[index+1].current.focus();
   }
 }

 const submitOTP = ()=>{
   nav("/dashboard");
 }

 return(
  <div
   className="auth-bg"
   style={{backgroundImage:`url(${bgImage})`}}
  >

   <div className="auth-card otp-card">

    <FaMobileAlt className="phone-icon"/>

    <h3>Verify your phone</h3>

    <p className="otp-text">
      Enter the verification code we sent to
      <br/> ******7859
    </p>

    <div className="otp-box">

      {inputRefs.map((ref,i)=>(
        <input
         key={i}
         type="text"
         maxLength="1"
         ref={ref}
         onChange={(e)=>handleChange(e,i)}
        />
      ))}

    </div>

    <p className="resend">
      Didn't receive a code? <span>Resend</span>
    </p>

    <button className="submit"
     onClick={submitOTP}>
     Continue
    </button>

   </div>

  </div>
 )
}
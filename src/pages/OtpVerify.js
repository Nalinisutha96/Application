import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assests/images/backgroundimage.png";
import { FaMobileAlt } from "react-icons/fa";

export default function OtpVerify(){

  const nav = useNavigate();
  const [error, setError] = useState("");

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only numbers
    if (!/^[0-9]?$/.test(value)) {
      e.target.value = "";
      return;
    }

    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const submitOTP = () => {
    let otp = "";

    inputRefs.forEach((ref) => {
      otp += ref.current.value;
    });

    if (otp.length < 6) {
      setError("Please enter complete OTP");
      return;
    }

    setError("");
    nav("/dashboard");   // Redirect to dashboard
  };

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
              onKeyDown={(e)=>handleKeyDown(e,i)}
            />
          ))}
        </div>

        {error && <p className="error-text">{error}</p>}

        <p className="resend">
          Didn't receive a code? <span>Resend</span>
        </p>

        <button
          className="submit"
          onClick={submitOTP}
        >
          Continue
        </button>

      </div>

    </div>
  )
}
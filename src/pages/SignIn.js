import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assests/images/backgroundimage.png";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignIn() {

  const nav = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const loginUser = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.email) {
      newErrors.email = "Please enter email";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Please enter password";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nav("/otp"); // redirect to OTP page
    }
  };

  const handleGoogle = () => {
    window.location.href = "https://accounts.google.com/";
  };

  const handleApple = () => {
    window.location.href = "https://appleid.apple.com/";
  };

  return (
    <div
      className="auth-bg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      <form className="auth-card" onSubmit={loginUser}>

        <h2>Sign In</h2>

        <p>
          Need an account?
          <span onClick={() => nav("/")}>
            Sign Up
          </span>
        </p>

        <div className="social-btns">
          <button type="button" className="google" onClick={handleGoogle}>
            <FcGoogle size={20}/> Use Google
          </button>

          <button type="button" className="apple" onClick={handleApple}>
            <FaApple size={20}/> Use Apple
          </button>
        </div>

        <div className="divider">OR</div>

        {/* EMAIL */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="email@email.com"
            value={form.email}
            className={errors.email ? "input-error" : ""}
            onChange={(e)=>setForm({...form,email:e.target.value})}
          />
          {errors.email && (
            <p className="error-text">{errors.email}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="form-group">
          <div className="password-head">
            <label>Password</label>
            <span className="forgot">
              Forgot Password?
            </span>
          </div>

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={form.password}
              className={errors.password ? "input-error" : ""}
              onChange={(e)=>setForm({...form,password:e.target.value})}
            />

            {showPassword ? (
              <FaEyeSlash
                className="eye"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEye
                className="eye"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          {errors.password && (
            <p className="error-text">{errors.password}</p>
          )}
        </div>

        <div className="terms">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>

        <button type="submit" className="submit">
          Sign In
        </button>

      </form>

    </div>
  );
}
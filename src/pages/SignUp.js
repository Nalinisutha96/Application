import  { useState} from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assests/images/backgroundimage.png";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {

  const nav = useNavigate();

 const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: ""
  });


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const submitForm = (e) => {
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

  if (!form.confirm) {
    newErrors.confirm = "Please confirm password";
  } else if (form.password !== form.confirm) {
    newErrors.confirm = "Passwords do not match";
  }

  if (!acceptTerms) {
    newErrors.terms = "Please accept Terms & Conditions";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
   localStorage.setItem("user", JSON.stringify({
  email: form.email,
  password: form.password
}));

nav("/signin");
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

      <form className="auth-card" onSubmit={submitForm}>

        <h2>Sign Up</h2>

        <p>
          Already have an account?
          <span onClick={() => nav("/signin")}>
            Sign In
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


      

      <div className="form-group">
  <label>Email</label>
  <input
    type="email"
    placeholder="email@email.com"
    value={form.email}
    className={errors.email ? "input-error" : ""}
    onChange={(e)=>setForm({...form,email:e.target.value})}
  />
  {errors.email && <p className="error-text">{errors.email}</p>}
</div>

        <div className="form-group">
  <label>Password</label>

  <div className="password-box">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter Password"
      value={form.password}
      className={errors.password ? "input-error" : ""}
      onChange={(e)=>setForm({...form,password:e.target.value})}
    />

    {showPassword ? (
      <FaEyeSlash className="eye" onClick={() => setShowPassword(false)} />
    ) : (
      <FaEye className="eye" onClick={() => setShowPassword(true)} />
    )}
  </div>

  {errors.password && (
    <p className="error-text">{errors.password}</p>
  )}
</div>

        <div className="form-group">
  <label>Confirm Password</label>

  <div className="password-box">
    <input
      type={showConfirm ? "text" : "password"}
      placeholder="Re-enter Password"
      value={form.confirm}
      className={errors.confirm ? "input-error" : ""}
      onChange={(e)=>setForm({...form,confirm:e.target.value})}
    />

    {showConfirm ? (
      <FaEyeSlash className="eye" onClick={() => setShowConfirm(false)} />
    ) : (
      <FaEye className="eye" onClick={() => setShowConfirm(true)} />
    )}
  </div>

  {errors.confirm && (
    <p className="error-text">{errors.confirm}</p>
  )}
</div>

        <div className="terms">
          <input 
            type="checkbox"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
          <p>I accept <span>Terms & Conditions</span></p>
        </div>


        <button type="submit" className="submit">
          Sign Up
        </button>

      </form>

    </div>
  );
}
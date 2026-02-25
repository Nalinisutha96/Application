import { react} from "react";


export default function RegistrationForm(){

 return(
  <div className="reg-container">

   {/* HEADER */}
   <div className="reg-header">
    <div>
     <h2>Registration Form</h2>
     <p>Central Hub for Personal Customization</p>
    </div>

    <button className="profile-btn">
      View Profile
    </button>
   </div>

   {/* FORM */}
   <div className="reg-grid">

    <div className="form-group">
     <label>Full Name*</label>
     <input placeholder="Full Name*"/>
    </div>

    <div className="form-group">
     <label>Email Address*</label>
     <input placeholder="Email Address*"/>
    </div>

    <div className="form-group">
     <label>Contact Number*</label>
     <input placeholder="Contact Number*"/>
    </div>

    <div className="form-group">
     <label>Department*</label>
     <select>
      <option>Department</option>
     </select>
    </div>

    <div className="form-group">
     <label>State*</label>
     <select>
      <option>State*</option>
     </select>
    </div>

    <div className="form-group">
     <label>City*</label>
     <select>
      <option>City*</option>
     </select>
    </div>

    <div className="form-group full">
     <label>Address</label>
     <textarea
      className="textarea"
      placeholder="Address"
     ></textarea>
    </div>

   </div>

   {/* RADIO */}
   <div className="radio-section">

    <p>Currently Working or not</p>

    <div className="radio-row">
     <label className="radio-item">
      <input type="radio" name="work"/>
      <span>Yes</span>
     </label>

     <label className="radio-item">
      <input type="radio" name="work"/>
      <span>No</span>
     </label>
    </div>

   </div>

   {/* CHECKBOX */}
   <div className="check-section">

    <p>Years of Experience</p>

    <div className="check-row">
     <label className="check-item">
      <input type="checkbox"/>
      <span>1 year</span>
     </label>

     <label className="check-item">
      <input type="checkbox"/>
      <span>2+ year</span>
     </label>

     <label className="check-item">
      <input type="checkbox"/>
      <span>4+ year</span>
     </label>
    </div>

   </div>

   <button className="registersubmit">
    Submit
   </button>

  </div>
 )
}
import { react} from "react";

export default function ProductList(){
return(

  <div className="list-container">

   <div className="reg-header">
    <div>
     <h2>List</h2>
     <p>Central Hub for Personal Customization</p>
    </div>


<button className="profile-btn">
  View Profile
</button>


   </div>

  <div className="list-container">


     {/* TABLE CARD */}
     <div className="table-card">

      {/* TOP */}
     <div className="table-top">

 <h4 className="table-title">
   List
 </h4>

 <div className="search-wrapper">
  <input
   type="text"
   className="search-box"
   placeholder="Search Teams"
  />
 </div>

</div>

      {/* TABLE */}
      <div className="table-responsive">

       <table className="user-table">

        <thead>
         <tr>
          <th>No</th>
          <th>Name</th>
          <th>Department</th>
          <th>Number</th>
          <th>Location</th>
          <th>Address</th>
          <th>Currently working</th>
          <th>Experience</th>
         </tr>
        </thead>

        <tbody>

         {/* ROW 1 */}
         <tr>
          <td>01</td>

          <td>
           <div className="name-box">
            <b>Mani</b>
            <span>mani123@gmail.com</span>
           </div>
          </td>

          <td>
           <div className="dept-box">
            <b>Product Management</b>
            <span>Product development & lifecycle</span>
           </div>
          </td>

          <td>9874563211</td>

          <td>
           <div className="loc-box">
            Coimbatore
            <span>TamilNadu</span>
           </div>
          </td>

          <td>
           <div className="addr-box">
            Sree Mahalakshmi
            <span>Garden Layout</span>
           </div>
          </td>

          <td className="yes">Yes</td>
          <td>1 year</td>
         </tr>

         {/* ROW 2 */}
         <tr>
          <td>02</td>

          <td>
           <div className="name-box">
            <b>Velu</b>
            <span>velu123@gmail.com</span>
           </div>
          </td>

          <td>
           <div className="dept-box">
            <b>Marketing Team</b>
            <span>Campaigns & market analysis</span>
           </div>
          </td>

          <td>9874563211</td>

          <td>
           <div className="loc-box">
            Coimbatore
            <span>TamilNadu</span>
           </div>
          </td>

          <td>
           <div className="addr-box">
            Sree Mahalakshmi
            <span>Garden Layout</span>
           </div>
          </td>

          <td className="no">No</td>
          <td>2 Years</td>
         </tr>

         {/* ROW 3 */}
         <tr>
          <td>03</td>

          <td>
           <div className="name-box">
            <b>Kavi</b>
            <span>kavi123@gmail.com</span>
           </div>
          </td>

          <td>
           <div className="dept-box">
            <b>HR Department</b>
            <span>Talent acquisition</span>
           </div>
          </td>

          <td>9874563211</td>

          <td>
           <div className="loc-box">
            Coimbatore
            <span>TamilNadu</span>
           </div>
          </td>

          <td>
           <div className="addr-box">
            Sree Mahalakshmi
            <span>Garden Layout</span>
           </div>
          </td>

          <td className="yes">Yes</td>
          <td>5 Years</td>
         </tr>

        </tbody>

       </table>
      </div>

      {/* PAGINATION */}
      <div className="pagination">

       <span>Show 5 per page</span>

       <div className="pages">
        <span>←</span>
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>→</span>
       </div>

      </div>

     </div>

    </div>

  </div>
 )
}

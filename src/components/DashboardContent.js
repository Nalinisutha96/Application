import EarningsChart from "./EarningChart";
import dashboardImg from "../assests/images/dashboardform.png";

export default function DashboardContent() {
  return (
<div className="dashboard">

  {/* TOP SECTION */}
  <div className="top-row">

     <div className="social-grid">

        <div className="social-card">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
          <div>
            <h3>9.3k</h3>
            <p>Amazing mates</p>
          </div>
        </div>

        <div className="social-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" />
          <div>
            <h3>24k</h3>
            <p>Lesson Views</p>
          </div>
        </div>

        <div className="social-card">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" />
          <div>
            <h3>608</h3>
            <p>New Subscribers</p>
          </div>
        </div>

        <div className="social-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" />
          <div>
            <h3>2.5k</h3>
            <p>Stream Audience</p>
          </div>
        </div>

      </div>

    <div className="connect-box">
      <div>
        <h3>
          Connect Today & Join
          <span> the KeenThemes Network</span>
        </h3>
        <p>
          Enhance your projects with premium themes and templates.
        </p>
        <button>Get Started</button>
      </div>

      <img src={dashboardImg} className="connect-img"/>
    </div>

  </div>


  {/* HIGHLIGHTS + EARNINGS */}
  <div className="stats-row">

    <div className="highlight-box">
    <div className="card-header">
      <h4>Highlights</h4>
      <span className="dots">⋮</span>
    </div>

    <p className="sales-label">All time sales</p>
    <h2 className="sales-amount">$295.7k</h2>

    <div className="progress-group">
      <div className="progress green"></div>
      <div className="progress orange"></div>
      <div className="progress purple"></div>
    </div>

    <ul className="sales-list">
      <li>Online Store <span>$172k ↑ 3.9%</span></li>
      <li>Facebook <span>$85k ↓ 0.7%</span></li>
      <li>Instagram <span>$36k ↑ 8.2%</span></li>
    </ul>
  </div>

   <div className="earnings-box">
    <div className="card-header">
      <h4>Earnings</h4>

      <div className="filter">
        <label>Referrals only</label>
        <input type="checkbox"/>
        <select>
          <option>12 months</option>
        </select>
      </div>
    </div>

    <EarningsChart/>
  </div>

  </div>


<div className="team-row">

  {/* TEAM MEETING */}
  <div className="meeting-box">

    <h4>Team Meeting</h4>
    <p className="time">09:00 - 09:30</p>

    <p className="meeting-desc">
      Team meeting to discuss strategies, outline project milestones,
      define key goals, and establish clear timelines.
    </p>

    <div className="meeting-info">
      <div>
        <p>Location</p>
        <b>Amsterdam</b>
      </div>

      <div className="members">
        <img src="https://i.pravatar.cc/40?img=1"/>
        <img src="https://i.pravatar.cc/40?img=2"/>
        <img src="https://i.pravatar.cc/40?img=3"/>
      </div>
    </div>

    <button className="join-btn">Join Meeting</button>

  </div>


  {/* TEAM TABLE */}
  <div className="team-table">

   <div className="table-header">
  <h4>Teams</h4>

 <div className="search-wrapper">
  <input
   type="text"
   className="search-box"
   placeholder="Search Teams"
  />
 </div>

</div>

<table className="team-data">
  <thead>
    <tr>
      <th>
        <input type="checkbox" className="table-check"/>
      </th>
      <th>Team</th>
      <th>Rating</th>
      <th>Last Modified</th>
      <th>Members</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><input type="checkbox" className="table-check"/></td>
      <td>
        <b>Product Management</b>
        <p className="sub">Product development & lifecycle</p>
      </td>
      <td className="stars">⭐⭐⭐⭐⭐</td>
      <td>21 Oct, 2024</td>
      <td className="members">
        <img src="https://i.pravatar.cc/30?img=4"/>
        <img src="https://i.pravatar.cc/30?img=5"/>
        <img src="https://i.pravatar.cc/30?img=6"/>
      </td>
    </tr>

    <tr>
      <td><input type="checkbox" className="table-check"/></td>
      <td>
        <b>Marketing Team</b>
        <p className="sub">Campaigns & market analysis</p>
      </td>
      <td className="stars">⭐⭐⭐⭐</td>
      <td>15 Oct, 2024</td>
      <td className="members">
        <img src="https://i.pravatar.cc/30?img=7"/>
        <img src="https://i.pravatar.cc/30?img=8"/>
      </td>
    </tr>

  </tbody>
</table>

<div className="pagination-box">

  <div className="show-entries">
    Show
    <select>
      <option>5</option>
      <option>10</option>
      <option>25</option>
    </select>
    per page
  </div>

  <div className="page-count">
    1-10 of 52
  </div>

  <div className="pages">
    <span className="page-btn">←</span>
    <span className="page-btn active">1</span>
    <span className="page-btn">2</span>
    <span className="page-btn">3</span>
    <span className="page-btn">4</span>
    <span className="page-btn">5</span>
    <span className="page-btn">→</span>
  </div>

</div>
  </div>

</div>

</div>
  );
}
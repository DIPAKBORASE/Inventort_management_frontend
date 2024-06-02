import React, { useState } from "react";
import secondImage from "../../assets/Logo small.png";

import "./hist.css";

export default function Request_History() {
  const [isMastersDropdownOpen, setIsMastersDropdownOpen] = useState(false);
  const [isMistDropdownOpen, setIsMistDropdownOpen] = useState(false);
  const [isHistoryDropdownOpen, setIsHistoryDropdownOpen] = useState(false);
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  
  const toggleMastersDropdown = () => {
    setIsMastersDropdownOpen(!isMastersDropdownOpen);
    setIsHistoryDropdownOpen(false); // Close other dropdowns

  };

  const toggleMistDropdown = () => {
    setIsMistDropdownOpen(!isMistDropdownOpen);
    setIsHistoryDropdownOpen(false); // Close other dropdowns
  };

  const userStatusOptions = ["Available", "Busy", "Offline"];
  const [selectedUserStatus, setSelectedUserStatus] = useState(userStatusOptions[0]);

  const toggleHistoryDropdown = () => {
    setIsHistoryDropdownOpen(!isHistoryDropdownOpen);
    setIsMastersDropdownOpen(false); // Close other dropdowns
  };

  const toggleTooltip = () => {
    setIsTooltipActive(!isTooltipActive);
  };

  const changeUserStatus = (status) => {
    setSelectedUserStatus(status);
  };

  const [selectedButton, setSelectedButton] = useState("proc");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <div className="dashboard-container">
        {/* Left column */}
        <div className="left-column">
                  {/* Logo and title */}
                  <div className="logo-container">
                    {/* Add your logo here */}
                    <img src={secondImage} alt="Logo" className="logo" />
                  </div>
        
                  {/* Menu items */}
                  <ul className="menu-list">
                    <li>
                      <i className="fas fa-plus"></i> Raise Request
                    </li>
        
                    <li className="active">
                      <i className="fas fa-history-alt"></i> Request History
                    </li>
                    <li>
                      <i className="fas fa-sign-out-alt"></i> Log Out
                    </li>
                   
                  </ul>
                </div>
        
                {/* Main content (Add your main content here) */}
              <div className="main-content">
              
                <div className="top-navbar">
                    <div className="navbar-title">
                        <h1>Request History</h1>
                    </div>     
                    <div className="user-icon" onClick={toggleTooltip}>
                      <i className="fas fa-user"></i>
                      <span>User: John Doe</span><br/>
                      <div className="user-rank-tooltip">
                        <span>Rank: Requester</span>
                      </div>
                    </div>
                        
      
      </div>


  <br/><br/>
  {/* Tabs for Procurement and Service Request */}
  <div className="tabs">
    <button 
     style={{margin:"5px"}} 
     value="proc"
     className={selectedButton === "proc" ? "active1" : ""}
     onClick={() => handleButtonClick("proc")}>
     Procurement</button>

    <button
        style={{margin:"5px"}}
        value="sereq"
        className={selectedButton === "sereq" ? "active1" : ""}
        onClick={() => handleButtonClick("sereq")}  >
      Service Request</button>
  </div>

  {/* Parameter blocks with icons */}

   
</div>
  
    <div className="hist-new-section2" style={{marginTop:"-40px"}}>
      <br/>
    
    <div className="histsearch-box">
        <input type="text" placeholder="Search Item..." />
        <button className="histsearch-btn"><i className="fas fa-search"></i></button>
    </div>
      
      {/* table here */}
      {selectedButton === "proc" && (
            <>
              {/* Date Wise Table */}
          
                {/* Export to Excel Button */}
            <button className="histexport-btn">Export to Excel</button>
              <table className="hist-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Request ID</th>
            <th>Department</th>
            <th>Request Date</th>
            <th>Department</th>
            <th>Total (₹)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>7548</td>
            <td>Regal Stationery</td>
            <td>28/11/2023</td>
            <td>OPXADM00105</td>
            <td>Export Box No. 07 GP Heavy</td>
            <td>25</td>
            <td><i className="fas fa-i" style={{cursor:"pointer", marginLeft:"30px"}} /></td>
          </tr>
          {/* Add more sample rows if needed */}
        </tbody>
      </table>

            {/* Page Navigation Buttons */}
            <div className="hist-navigation">
        <button>First</button>
        <button>Previous</button>
        <button>Next</button>
        <button>Last</button>
      </div>

      {/* Rows Per Page */}
      <div className="hist-navigation">
        <label>Show Rows Per Page:</label>
        <select>
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
            </>
          )}

          {selectedButton === "sereq" && (

            <>
                {/* Export to Excel Button */}
            <button className="histexport-btn">Export to Excel</button>
              {/* Consolidate Table */}
              <table className="hist-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Request ID</th>  
            <th>Request Date</th>
            <th>Department</th>
            <th>Type of Issue</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>7548</td>
            <td>Logitech Keyboard</td>
            <td>wireless keyboard</td>
            <td>25</td>
            <td>18.00</td>
            <td><i className="fas fa-correct" style={{marginLeft:"30px"}} />Resolved</td>
            <td><i className="fas fa-i" style={{cursor:"pointer", marginLeft:"30px"}} />
            <i className="fas fa-acknowledge" style={{cursor:"pointer", marginLeft:"30px"}} /></td> 
          </tr>
          {/* Add more sample rows if needed */}
        </tbody>
      </table>

            {/* Page Navigation Buttons */}
            <div className="hist-navigation">
        <button>First</button>
        <button>Previous</button>
        <button>Next</button>
        <button>Last</button>
      </div>

      {/* Rows Per Page */}
      <div className="hist-navigation">
        <label>Show Rows Per Page:</label>
        <select>
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
            </>
          )}  

  
      {/* Submit Button */}
      <div className="hist-form-field">
        <button type="submit" style={{backgroundColor:" #afa24c"}}>Submit</button>
      </div>
    </div>
 
</div>
    </>
  );
}

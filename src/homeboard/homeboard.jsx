import React, { useState } from "react";
import Select from "react-select";
import secondImage from "../assets/Logo small.png";

import "./homeboard.css";
import { Link } from "react-router-dom";

export default function Homeboard() {
  const [isMastersDropdownOpen, setIsMastersDropdownOpen] = useState(false);
  const [isMistDropdownOpen, setIsMistDropdownOpen] = useState(false);
  const [isHistoryDropdownOpen, setIsHistoryDropdownOpen] = useState(false);
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  
  const productOptions = [
    { value: "product1", label: "Product 1" },
    { value: "product2", label: "Product 2" },
    { value: "product3", label: "Product 3" },
    // Add more options as needed
  ];

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
                   <Link to="/" className="link-style">
                    <li>
                        <i className="fas fa-dashboard"></i> Dashboard
                    </li>
                    </Link>
                    <Link to="/homeboard" className="link-style">
                    <li>
                      <i className="fas fa-inbox"></i> Requests
                    </li>
                    </Link>
                    <Link to="/inward_material" className="link-style">
                    <li>
                      <i className="fas fa-box"/>Inward Material
                    </li>
                    </Link>
                    <Link to="/inward_history" className="link-style">
                    <li>
                      <i className="fas fa-history"></i> Inward History
                    </li>
                    </Link>
                    <Link to="/dispatch" className="link-style">
                    <li>
                      <i className="fas fa-truck"></i> Dispatch
                    </li>
                    </Link>
                    <Link to="/dispatch_history" className="link-style">
                    <li>
                      <i className="fas fa-history"></i> Dispatch History
                    </li>
                    </Link>
                    <Link to="/low_stock_alert" className="link-style">
                    <li>
                      <i className="fas fa-exclamation-triangle"></i> Low Stock Alert
                    </li>
                    </Link>
                    <Link to="/po_history" className="link-style">
                    <li>
                      <i className="fas fa-history"></i> PO History
                    </li>
                    </Link>
                    <Link to="/track_asset" className="link-style">
                    <li>
                      <i className="fas fa-map-marker-alt"></i> Track Asset
                    </li>
                    </Link>
                    <Link to="/track_user_asset" className="link-style">
                    <li>
                      <i className="fas fa-user"></i> Track User Asset
                    </li>
                    </Link>
                    <Link to="/track_opex_stock" className="link-style">
                    <li>
                      <i className="fas fa-cubes"></i> Track OPEX Stock
                    </li>
                    </Link>
                    <Link to="/track_capex_stock" className="link-style">
                    <li>
                      <i className="fas fa-cube"></i> Track CAPEX Stock
                    </li>
                    </Link>
                
                    <li className="dropdown">
                    <div className="dropdown-header1" onClick={toggleMistDropdown}>
                      <i className="fa fa-file-alt"></i>
                      <i className={`fas fa-chevron-${isMistDropdownOpen ? "up" : "down"}`}></i>
                        <span>Reports</span>
                      </div>
                      <ul
                        className={`dropdown-content ${
                          isMistDropdownOpen ? "show" : ""
                        }`} >
                        <Link to="/material_receipt_report" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> Material Receipt
                        </li>
                        </Link>
                        <Link to="/consumption_report" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> Consumption
                        </li>
                        </Link>
                        <Link to="/itemwise_stock_report" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> Item Wise Stock 
                        </li>
                        </Link>
                        <Link to="/challan_summary_report" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> Challan Summary
                        </li>
                        </Link>
                        <Link to="/issue_tracker_report" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> Issue Tracker
                        </li>
                        </Link>
                        <Link to="/ytd_mtd_report" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> YTD/MTD
                        </li>
                        </Link>
                      </ul>

                    </li>

                    <li className="dropdown">
                      <div className="dropdown-header" onClick={toggleMastersDropdown}>
                        <i className="fas fa-book"></i>
                        <i className={`fas fa-chevron-${isMastersDropdownOpen ? "up" : "down"}`}></i>
                        <span>Masters</span>
                      </div>
                      <ul
                        className={`dropdown-content ${
                          isMastersDropdownOpen ? "show" : ""
                        }`} >
                        <Link to="/product" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> Product
                        </li>
                        </Link>
                        <Link to="/location" className="link-style"> 
                        <li>
                          <i className="fas fa-circle"></i> Location
                        </li>
                        </Link>
                        <Link to="/vendor" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> Vendor
                        </li>
                        </Link>
                        <Link to="/user" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> User
                        </li>
                        </Link>
                        <Link to="/unit" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> Unit
                        </li>
                        </Link>
                        <Link to="/issue_type" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> Issue Type
                        </li>
                        </Link>
                        <Link to="/department" className="link-style">
                        <li>
                          <i className="fas fa-circle"></i> Department
                        </li>
                        </Link>
                      </ul>
                    </li>
                    <li>
                      <i className="fas fa-sign-out-alt"></i> Logout
                    </li>
                  </ul>
                </div>
        
                {/* Main content (Add your main content here) */}
              <div className="main-content">
              
                <div className="top-navbar">
                    <div className="navbar-title">
                        <h1>Requests</h1>
                    </div>     
                    <div className="user-icon" onClick={toggleTooltip}>
                      <i className="fas fa-user"></i>
                      <span>User: John Doe</span><br/>
                      <div className="user-rank-tooltip">
                        <span>Rank: Admin</span>
                      </div>
                    </div>
                        
      
      </div>


  <br/><br/>
  {/* Tabs for Procurement and Service Request */}
  <div className="tabs">
    <button 
     style={{margin:"5px"}} 
     value="proc"
     className={selectedButton === "proc" ? "active" : ""}
     onClick={() => handleButtonClick("proc")}>
     Procurement</button>

    <button
        style={{margin:"5px"}}
        value="sereq"
        className={selectedButton === "sereq" ? "active" : ""}
        onClick={() => handleButtonClick("sereq")}  >
      Service Request</button>
  </div>

  {/* Parameter blocks with icons */}

    {selectedButton === "proc" && (
    <>
  <div className="parameter-blocks" style={{marginLeft:"-460px"}}>

    <div className="parameter-card">
    <div className="parameter" style={{backgroundColor: 'red' }}>
    <i className="fas fa-file-alt"></i>
    </div>
    <div className="parameter-text">Deviation <br/> Approval <br/>
    <div className="parameter-text" style={{fontSize:"22px", color:"red"}}>47</div>
    </div>
  
  </div>

  <div className="vertical-line"></div>

  <div className="parameter-card">
    <div className="parameter" style={{ backgroundColor: 'green' }}>
      <i className="fas fa-inbox"></i>
    </div>
    <div className="parameter-text">Open <br/><br/>
    <div className="parameter-text" style={{fontSize:"22px", color:"green"}}>20</div>
    </div>

  </div>

  <div className="vertical-line"></div>

      <div className="parameter-card">
          <div className="parameter" style={{ backgroundColor: 'blue' }}>
            <i className="fas fa-table"></i>
          </div>
          <div className="parameter-text">Ready to <br/> Dispatch <br/>
          <div className="parameter-text" style={{fontSize:"22px", color:"blue"}}>15</div>

          </div>
        </div>

        <div className="vertical-line"></div>

        <div className="parameter-card">
          <div className="parameter" style={{ backgroundColor: 'yellow' }}>
            <i className="fas fa-history"></i>
          </div>
          <div className="parameter-text">Dispatched<br/><br/>
          <div className="parameter-text" style={{fontSize:"22px", color:"yellow"}}>173</div>
          </div>
        </div>


        <div className="vertical-line"></div>
        <div className="parameter-card">
          <div className="parameter" style={{ backgroundColor: 'pink' }}>
            <i className="fas fa-truck"></i>
          </div>
          <div className="parameter-text">Delivered <br/><br/>
          <div className="parameter-text" style={{fontSize:"22px", color:"pink"}}>642</div>
          </div>
        </div>

        <div className="vertical-line"></div>

        <div className="parameter-card">
          <div className="parameter" style={{ backgroundColor: 'skyblue' }}>
            <i className="fas fa-book" style={{float:"center"}}></i>
          </div>
          <div className="parameter-text">Raised PO <br/><br/>
          <div className="parameter-text" style={{fontSize:"22px", color:"skyblue"}}>0</div>
          </div>
          
        </div>
      </div>
        </>
    )}
    
    {selectedButton === "sereq" && (
    <>
  <div className="parameter-blocks" style={{marginLeft:"-460px"}}>
 
    <div className="parameter-card">
    <div className="parameter" style={{ backgroundColor: 'green' }}>
      <i className="fas fa-inbox"></i>
    </div>
    <div className="parameter-text">Open <br/><br/>
    <div className="parameter-text" style={{fontSize:"22px", color:"green"}}>20</div>
    </div>

  </div>

  <div className="vertical-line"></div>

      <div className="parameter-card">
          <div className="parameter" style={{ backgroundColor: 'orange' }}>
            <i className="fas fa-table"></i>
          </div>
          <div className="parameter-text">Overdue<br/>
          <div className="parameter-text" style={{fontSize:"22px", color:"orange"}}>88</div>

          </div>
        </div>

        <div className="vertical-line"></div>

        <div className="parameter-card">
          <div className="parameter" style={{ backgroundColor: 'magenta' }}>
            <i className="fas fa-history"></i>
          </div>
          <div className="parameter-text">Resolved<br/><br/>
          <div className="parameter-text" style={{fontSize:"22px", color:"magenta"}}>1441</div>
          </div>
        </div>


        <div className="vertical-line"></div>

        <div className="parameter-card">
          <div className="parameter" style={{ backgroundColor: 'skyblue' }}>
            <i className="fas fa-book" style={{float:"center"}}></i>
          </div>
          <div className="parameter-text">Discarded<br/><br/>
          <div className="parameter-text" style={{fontSize:"22px", color:"skyblue"}}>3</div>
          </div>
          
        </div>
      </div>
        </>
    )}
 
    </div>
  
    <div className="homeb-new-section2">
          <h2>Open</h2>
    <br/>
    
    <div className="homebsearch-box">
        <input type="text" placeholder="Search Item..." />
        <button className="homebsearch-btn"><i className="fas fa-search"></i></button>
    </div>
      
      {/* table here */}
      {selectedButton === "proc" && (
            <>
              {/* Date Wise Table */}
          
                {/* Export to Excel Button */}
            <button className="homebexport-btn">Export to Excel</button>
              <table className="homeb-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Request ID</th>
            <th>Department</th>
            <th>Requester Name</th>
            <th>Requester Department(Cost Center)</th>
            <th>Request Date</th>
            <th>Location</th>
            <th>Total (₹)</th>
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
            <td>Nos</td>
            <td>25</td>
            <td><i className="fas fa-i" style={{cursor:"pointer", marginLeft:"30px"}} /></td>
          </tr>
          {/* Add more sample rows if needed */}
        </tbody>
      </table>

            {/* Page Navigation Buttons */}
            <div className="homeb-navigation">
        <button>First</button>
        <button>Previous</button>
        <button>Next</button>
        <button>Last</button>
      </div>

      {/* Rows Per Page */}
      <div className="homeb-navigation">
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
            <button className="homebexport-btn">Export to Excel</button>
              {/* Consolidate Table */}
              <table className="homeb-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Request ID</th>  
            <th>Department</th>
            <th>Name</th>
            <th>Requester Department(Cost Center)</th>
            <th>Request Date</th>
            <th>Description</th>
            <th>Location</th>
            <th>Assign To</th>
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
            <td>1685.00</td>
            <td>18.00</td>
            <td>302.40</td>
            <td>1987.40</td>
            <td><i className="fas fa-i" style={{cursor:"pointer", marginLeft:"30px"}} /></td> 
          </tr>
          {/* Add more sample rows if needed */}
        </tbody>
      </table>

            {/* Page Navigation Buttons */}
            <div className="homeb-navigation">
        <button>First</button>
        <button>Previous</button>
        <button>Next</button>
        <button>Last</button>
      </div>

      {/* Rows Per Page */}
      <div className="homeb-navigation">
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
      <div className="homeb-form-field">
        <button type="submit" style={{backgroundColor:" #afa24c"}}>Submit</button>
      </div>
    </div>
 
</div>
    </>
  );
}

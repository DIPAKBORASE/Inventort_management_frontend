import React,{useState} from "react";
import secondImage from "../assets/Logo small.png";
import { Link } from "react-router-dom";

import "./capex.css";

export default function Track_Capex() {
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

    return (
        <>
        
             <meta name="viewport" content="width=device-width, initial-scale=1.00" />
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        
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
                    <li className="active">
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
                        <h1>Track CAPEX Stock</h1>
                    </div>     
                    <div className="user-icon" onClick={toggleTooltip}>
                      <i className="fas fa-user"></i>
                      <span>User: John Doe</span><br/>
                      <div className="user-rank-tooltip">
                        <span>Rank: Admin</span>
                      </div>
                    </div>
                  </div>
                
            </div>
       
            {/* PO History Section */}
            <div className="track-capex-section">

        <div className="capex-row-disp">    
            <div className="track-capex-search-form">
        <label>Search:</label><br/>
        <input type="text" className="track-capex-search-input" placeholder="Search..." />
        <select className="track-capex-maindropdown" placeholder="choose">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
        
      <div className="capex-form-field" style={{marginLeft:"-395px"}}>
        <label>Location<span style={{ color: 'red' }}>*</span></label>
           <select required>
            <option value="">Choose Location</option>
            <option value="vadodra">Vadodra</option>
            {/* Add locations dynamically or hardcode */}
            </select>
      </div>

      <div className="capex-form-field">
        <label>Department<span style={{ color: 'red' }}>*</span></label>
           <select required>
            <option value="">Choose Department</option>
            <option value="IT">IT</option>
            {/* Add locations dynamically or hardcode */}
            </select>
      </div>
       
       

     </div>  
      {/* Add the rest of your page content, such as tables, buttons, etc. */}

    
      {/* Export to Excel Button */}
      <button className="track-capex-export-btn">Export to Excel</button>

      {/* Table */}
      <table className="track-capex-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Barcode</th>
            <th>Manufacturer</th>
            <th>Serial Number</th>
            <th>Model</th>
            <th>AMC Expiry</th>
            <th>AMC Vendor</th>
            <th>Product Expiry</th>
            <th>Status</th>
            <th>Location</th>
            <th>Department(Cost Center)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Keyboard (Wired)</td>
            <td>132123</td>
            <td>iBall</td>
            <td>SY1531985</td>
            <td>CH1216A</td>
            <td></td>
            <td>Xpo</td>
            <td></td>
            <td>Assigned</td>
            <td>BDB 7th floor</td>
            <td>IT(111011203)</td>
            <td><i className="fas fa-i"/></td>
          </tr>
          {/* Add more sample rows if needed */}
        </tbody>
      </table>

      {/* Page Navigation Buttons */}
      <div className="track-opex-navigation">
        <button>First</button>
        <button>Previous</button>
        <button>Next</button>
        <button>Last</button>
      </div>

      {/* Rows Per Page */}
      <div className="track-opex-navigation">
        <label>Show Rows Per Page:</label>
        <select>
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
    </div> 



</div>
</>
    );        
}

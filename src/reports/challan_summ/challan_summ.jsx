import React,{useState} from "react";
import secondImage from "../../assets/Logo small.png";
import { Link } from "react-router-dom";

import "./challan.css";

export default function Challan_Summary() {
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
                        <li className="active">
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
                        <h1>Challan Summary Report</h1>
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
            <div className="challan-section">
    <div className="challan-row-disp">   
        <div className="challan-search-box">
        <label>Search:</label>
        <input type="text" placeholder="Search Item..." />
        <button className="challan-search-btn"><i className="fas fa-search"></i></button>
        </div>

        
      <div className="challan-form-field" style={{marginRight:"-50px"}}>
        <label>Location<span style={{ color: 'red' }}>*</span></label>
           <select required>
            <option value="">Choose Location</option>
            <option value="vadodra">E tower</option>
            {/* Add locations dynamically or hardcode */}
            </select>
      </div>

      <div className="challan-form-field" style={{marginLeft:"-320px"}}>
        <label>Item Name<span style={{ color: 'red' }}>*</span></label>
           <select required>
            <option value="">Choose item</option>   
            <option value="IT">100 Ah battery</option>
            {/* Add locations dynamically or hardcode */}
            </select>
      </div>

      <div className="challan-dateA-range-form">
        <label>From Date:</label><br/>
        <input type="date" className="material-from-date" />
        </div>

        <div className="challan-dateB-range-form">
        <label>To Date:</label><br/>
        <input type="date" className="material-to-date" />
     </div>
       
       

     </div>  
      {/* Add the rest of your page content, such as tables, buttons, etc. */}

    
      {/* Export to Excel Button */}
      <button className="challan-export-btn">Export to Excel</button>

      {/* Table */}
      <table className="challan-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Challan No.</th>
            <th>Date</th>
            <th>Location</th>
            <th>Item Code</th>
            <th>Item Name</th>
            <th>UOM</th>
            <th>Quantity</th>
            <th>GST</th>
            <th>Rate (₹)</th>
            <th>Total Amt(₹)</th>
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
            <td>75.00</td>
            <td>1685.00</td>
            <td>18.00</td>  
          </tr>
          {/* Add more sample rows if needed */}
        </tbody>
      </table>

      {/* Page Navigation Buttons */}
      <div className="challan-navigation">
        <button>First</button>
        <button>Previous</button>
        <button>Next</button>
        <button>Last</button>
      </div>

      {/* Rows Per Page */}
      <div className="challan-navigation">
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
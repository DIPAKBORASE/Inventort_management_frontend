import React, { useState } from "react";
import Select from "react-select";
import secondImage from "../assets/Logo small.png";
import { Link } from "react-router-dom";
import "./dispatch.css";

export default function Dispatch() {

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

      const productOptions = [
        { value: "product1", label: "Product 1" },
        { value: "product2", label: "Product 2" },
        { value: "product3", label: "Product 3" },
        // Add more options as needed
      ];
        
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
                    <li className="active">
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
                        <h1>Dispatch</h1>
                    </div>     
                    <div className="user-icon" onClick={toggleTooltip}>
                      <i className="fas fa-user"></i>
                      <span>User: John Doe</span><br/>
                      <div className="user-rank-tooltip">
                        <span>Rank: Admin</span>
                      </div>
                    </div>
                  </div>
                
            {/* new section form fields  */}
            <div className="disp-new-section">
        
          <div className="disp-form-fields-row">
            <div className="disp-form-field">
              <label>Type of Issue<span style={{ color: 'red' }}>*</span></label>
              <select required>
                <option value="">Choose Type</option>
                <option value="issue1">Issue 1</option>
                <option value="issue2">Issue 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="disp-form-field">
              <label>From Location<span style={{ color: 'red' }}>*</span></label>
              <select required>
                <option value="">Choose Location</option>
                {/* Add locations dynamically or hardcode */}
              </select>
            </div>
            <div className="disp-form-field">
              <label>To Location<span style={{ color: 'red' }}>*</span></label>
              <select required>
                <option value="">Choose Location</option>
                {/* Add locations dynamically or hardcode */}
              </select>
            </div>
            <div className="disp-form-field">
              <label>Date<span style={{ color: 'red' }}>*</span></label>
              <input type="date" />
            </div>
          </div>
          <div className="disp-form-fields-row">
            <div className="disp-form-field">
              <label>Collected By<span style={{ color: 'red' }}>*</span></label>
              <input type="text" />
            </div>
            <div className="disp-form-field">
              <label>Department<span style={{ color: 'red' }}>*</span></label>
              <select required>
                <option value="">Choose department</option>
                <option value="IT">IT</option>
                {/* Add locations dynamically or hardcode */}
              </select>
            </div>
            <div className="disp-form-field">
              <label>Cost Center<span style={{ color: 'red' }}>*</span></label>
              <input type="text" />
            </div>
            <div className="disp-form-field">
              <label>Mode of Transport<span style={{ color: 'red' }}>*</span></label>
              <input type="text" />
            </div>
          </div>
          <div className="disp-form-field">
          <label>Department<span style={{ color: 'red'}}>*</span></label>
        <div className="disp-circle-select">
        <input type="radio" name="department" id="it-radio" style={{marginRight:"-560px" , marginLeft:"-520px"}}  />
        <label for="it-radio" style={{marginRight:"-540px"}}>IT</label>
        <input type="radio" name="department" id="admin-radio" style={{marginRight:"-560px"}} />
        <label for="admin-radio">Admin</label>
          </div>
        </div>

        <div className="homeb-choose-product-field" style={{marginTop:"-10px", fontSize:"small"}}>
          <Select 
            isMulti
            options={productOptions}
            placeholder="Select products... " />
        </div>
        
        <table className="disp-data-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Code</th>
              <th>Item Name</th>
              <th>Barcode</th>
              <th>UOM</th>
              <th>Available Quantity</th>
              <th>Quantity</th>
              <th>User Name</th>
              <th>Remark</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>IC001</td>
              <td>Product 1</td>
              <td><input type="text" /></td>
              <td>Each</td>
              <td>100</td>
              <td><input type="number"/></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td>
                {/* Add action buttons or icons here */}
                <i className="fas fa-edit" style={{ marginRight: "10px" }}></i>
                <i className="fas fa-trash"></i>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

          <div className="disp-form-field">
            <button type="submit" style={{ backgroundColor: "#afa24c",marginTop:"10px" }}>
              Submit
            </button>
          </div>
        </div>



        </div>    
    </div>
    </>
    );
}
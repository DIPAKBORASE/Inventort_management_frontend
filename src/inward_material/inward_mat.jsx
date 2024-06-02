import React , {useState} from "react";
import secondImage from "../assets/Logo small.png";

import "./inward.css";
import { Link } from "react-router-dom";

export default function Inward_material() {
   
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
      
      const [selectedRadioOption, setSelectedRadioOption] = useState("po");

      
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
                   <Link to="" className="link-style">
                    <li>
                        <i className="fas fa-dashboard"></i> Dashboard
                    </li>
                    </Link>
                    <Link to="/homeboard" className="link-style">
                    <li>
                      <i className="fas fa-inbox"></i> Requests
                    </li>
                    </Link>
                    <Link to="" className="link-style">
                    <li className="active">
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
                        <h1>Inward Material</h1>
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
        
        {/* new section */}

        <div className="inward-new-section">

    <div className="inward-form-fields-row">
        
    <div className="product-circle-select">
                  <p><span style={{ color: 'red' }}>*</span></p><br/>
                  <label htmlFor="po" style={{}}>
                  <input
                    type="radio"
                    id="po"
                    name="radioOptions"
                    value="po"
                    checked={selectedRadioOption === "po"}
                    onChange={() => setSelectedRadioOption("po")}
                  />
                  PO
                </label>

                <label htmlFor="challan">
                  <input
                    type="radio"
                    id="challan"
                    name="radioOptions"
                    value="challan"
                    checked={selectedRadioOption === "challan"}
                    onChange={() => setSelectedRadioOption("challan")}
                  />
                  Challan
                </label>
              </div>

    </div>
      
        {selectedRadioOption === "po" && (
            <>
          <div className="product-row-disp" >
                  <div className="inward-form-field">
                    <label>Enter PO number<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" required />
                  </div>

                  <div className="inward-form-field">
                    <label>Enter Challan Number<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" required />
                  </div>

                  <div className="inward-form-field">
                    <label>Vendor Name<span style={{ color: 'red' }}>*</span></label>
                    <select required>
                      <option value="">Choose Vendor</option>
                      <option value="vendor1">Vendor 1</option>
                      <option value="vendor2">Vendor 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  <div className="inward-form-field">
                    <label>Date<span style={{ color: 'red' }}>*</span></label>
                    <input type="date" required />
                  </div>

            </div> 
            </>
          )}

          {selectedRadioOption === "challan" && (
              
            <>
              <div className="product-row-disp" >
                  <div className="inward-form-field">
                    <label>Enter Challan Number<span style={{ color: 'red' }}>*</span></label>
                    <input type="text" required />
                  </div>

                  <div className="inward-form-field">
                    <label>Vendor Name<span style={{ color: 'red' }}>*</span></label>
                    <select required>
                      <option value="">Choose Vendor</option>
                      <option value="vendor1">Vendor 1</option>
                      <option value="vendor2">Vendor 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  <div className="inward-form-field">
                    <label>Date<span style={{ color: 'red' }}>*</span></label>
                    <input type="date" required />
                  </div>

            </div> 

            </>
          )}  

      
      <div className="inward-form-fields-row">

        <div className="inward-form-field">
          <label>Select Location<span style={{ color: 'red' }}>*</span></label>
          <select required>
            <option value="">Choose Location</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        
    <div className="inward-form-fields-row" style={{marginTop:"10px"}}>
    <div className="inward-form-field">
        <label>Department<span style={{ color: 'red' }}>*</span></label>
        <div className="inward-circle-select" style={{ marginLeft: '-14px' }}>
        <input type="radio" name="department" id="it-radio"  />
        <label for="it-radio" style={{marginRight:"12px"}}>IT</label>
        <input type="radio" name="department" id="admin-radio" />
        <label for="admin-radio">Admin</label>
       </div>
    </div>
    </div>

        <div className="inward-form-field" >
          <label>Search Field<span style={{ color: 'red' }}>*</span></label>
          <select required>
            <option value="">Choose Field</option>
            <option value="field1">Field 1</option>
            <option value="field2">Field 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
       
       <br/>
      <table className="purchase-order-table" style={{fontSize:"10px"}}>
          <thead >
            <tr>
              <th>Sr. No.</th>
              <th>Code</th>
              <th>Item Name</th>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Serial Number</th>
              <th>AMC Expiry</th>
              <th>AMC Vendor</th>
              <th>Product Warranty</th>
              <th>UOM</th>
              <th>Quantity</th>
              <th>Per Unit Price (₹)</th>
              <th>Sub Total (₹)</th>
              <th>GST %</th>
              <th>GST Value (₹)</th>
              <th>Total (₹)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row, you can add more rows dynamically */}
            <tr>
              <td>1</td>
              <td>IC001</td>
              <td>Product 1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>GST Total</td>
              <td>0.00</td>
              <td>
                <i className="fas fa-edit" style={{marginRight:"10px"}}></i>
                <i className="fas fa-trash"></i>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      
        <div className="inward-form-field" >
        <button type="submit" style={{fontSize:"15px", marginLeft:"-40px" , backgroundColor:" #afa24c" , width:"200px" }}>Submit</button>
      </div>
    
    </div>

    
</div>
        </>


    );
}
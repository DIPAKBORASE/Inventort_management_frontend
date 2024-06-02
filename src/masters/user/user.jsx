import React,{useState} from "react";
import Select from "react-select";
import secondImage from "../../assets/Logo small.png";
import "./user.css";
import { Link } from "react-router-dom";

export default function User() {
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

      const [selectedRadioOption, setSelectedRadioOption] = useState("dateWise");


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
                   <Link to="/homeboard" className="link-style">
                    <li>
                      <i className="fas fa-inbox"></i> Requests
                    </li>
                    </Link>
                    </Link>
                    <li>
                      <i className="fas fa-inbox"></i> Requests
                    </li>
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
                        <li className="active">
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
                        <h1>Vendor</h1>
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
       
    <div className="usser-section">
        <div className="usser-row-disp" style={{marginLeft:"-20px"}}>   
            
       <div className="usser-form-field" >
         <label style={{color:"black"}}>Name<span style={{ color: 'red' }}>*</span></label>
          <input type="text" placeholder="enter  name.." />
       </div>

       <div className="usser-form-field" >
         <label style={{color:"black"}}>Enter Mobile No.<span style={{ color: 'red' }}>*</span></label>
          <input type="text" placeholder="enter mobile no. .." />
       </div>

       <div className="usser-form-field" >
         <label style={{color:"black"}}>Email ID<span style={{ color: 'red' }}>*</span></label>
          <input type="text" placeholder="enter valid email address.." />
       </div>
        
    </div>

    <div className="usser-row-disp" style={{marginLeft:"-20px"}}>
        <div className="usser-form-field" style={{}}>
            <label style={{color:"black", marginLeft:"20px"}}>Employee Code<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter employee code. .." />
          </div>
          
        <div className="usser-form-field" style={{marginLeft:"60px"}}>
            <label style={{color:"black",marginLeft:"20px"}}>Password<span style={{ color: 'red' }}>*</span></label>
              <input type="password" placeholder="enter your password.." />
          </div> 
    
        <div className="usser-form-field" style={{width:"80%"}}>
        <label style={{marginLeft:"2px"}}>User Type<span style={{ color: 'red' }}>*</span></label>
           <select required>
            <option value="">Select User Type</option>   
            <option value="IT">Admin</option>
            {/* Add locations dynamically or hardcode */}
            </select>
      </div> 

   
    </div>

   <div className="usser-row-disp" style={{marginLeft:"-5px"}}>
        <div className="usser-form-field" style={{width:"80%"}}>
            <label style={{marginLeft:"2px"}}>HOD<span style={{ color: 'red' }}>*</span></label>
            <select required>
                <option value="">Select HOD</option>   
                <option value="IT">10762R</option>
                {/* Add locations dynamically or hardcode */}
                </select>
        </div>

        <div className="usser-form-field" style={{width:"80%"}}>
        <label style={{marginLeft:"2px"}}>HEAD<span style={{ color: 'red' }}>*</span></label>
           <select required>
            <option value="">Select HEAD</option>   
            <option value="IT">10762R</option>
            {/* Add locations dynamically or hardcode */}
            </select>
       </div>

        <div className="usser-form-field" style={{width:"80%"}}>
        <label style={{marginLeft:"2px"}}>Department<span style={{ color: 'red' }}>*</span></label>
           <select required>
            <option value="">Select Department</option>   
            <option value="IT">Accounts</option>
            {/* Add locations dynamically or hardcode */}
            </select>
       </div>   

    </div>

        {/* <hr style={{marginLeft:"180px",marginTop:"-15px"}}/> */}
        
    <div className="usser-row-disp" style={{marginLeft:"-20px"}}>
        <div className="usser-form-field" style={{}}>
            <label style={{color:"black", marginLeft:"20px"}}>Cost Center</label>
              <input type="text" disabled="true" placeholder="enter City. .." />
          </div>

        <div className="usser-form-field" style={{}}>
            <label style={{color:"black", marginLeft:""}}>Location</label>
              <input type="text" placeholder="enter location .." />
          </div>


          
          </div>
          <div className="usser-form-field">
            <button type="submit" style={{ backgroundColor: "#afa24c",marginTop:"10px", 
             marginLeft:"30px" , width:"15%", padding:"5px" , fontSize:"14px" }}>
              Submit
            </button>
          </div>

        <hr style={{marginLeft:"30px"}}/>

        

      <h2 style={{marginLeft:"30px"}}>Users List</h2>

     <div className="search-box" style={{marginLeft:"30px", width:"25%" , marginTop:"1px"}}>
        <input type="text" placeholder="Search Item..." />
        <button className="search-btn" style={{width:"20%"}}><i className="fas fa-search"></i></button>
      </div>

      {/* Export to Excel Button */}
      <button className="usser-export-btn">Export to Excel</button>

      {/* Table */}
      <table className="usser-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Employee Code</th>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Location</th>
            <th>Department</th>
            <th>Cost Center</th>
            <th>Action</th>
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>PO123</td>
            <td>CH789</td>
            <td>Vendor A</td>
            <td>2023-01-01</td>
            <td>100</td>
            <td>$500</td>
            <td>$50</td>
            <td></td>
            <td><i className="fas fa-edit" style={{cursor:"pointer", marginRight:"20px"}} />
            <i className="fas fa-trash" />
            </td>
          </tr>
          {/* Add more sample rows if needed */}
        </tbody>
      </table>

      {/* Page Navigation Buttons */}
      <div className="usser-navigation">
        <button>First</button>
        <button>Previous</button>
        <button>Next</button>
        <button>Last</button>
      </div>

      {/* Rows Per Page */}
      <div className="usser-navigation">
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

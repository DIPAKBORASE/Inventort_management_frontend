import React,{useState} from "react";
import Select from "react-select";
import secondImage from "../../assets/Logo small.png";
import "./vendor.css";
import { Link } from "react-router-dom";

export default function Vendor() {
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
                        <li className="active">
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
            
       
    <div className="vendor-section">
        <div className="vendor-row-disp" style={{marginLeft:"-110px"}}>   
    
        <div className="vendor-search-box">
        <label>ALT CODE:</label>
        <input type="text" className="vendor-search-input" placeholder="enter alt code.." />
        </div>
          
       <div className="vendor-form-field" >
         <label style={{color:"black"}}>Name<span style={{ color: 'red' }}>*</span></label>
          <input type="text" placeholder="enter  name.." />
       </div>

       <div className="location-form-field" >
         <label style={{color:"black"}}>Contact Person<span style={{ color: 'red' }}>*</span></label>
          <input type="text" placeholder="enter contact person's name.." />
       </div>

       <div className="location-form-field" >
         <label style={{color:"black"}}>Email ID<span style={{ color: 'red' }}>*</span></label>
          <input type="text" placeholder="enter valid email address.." />
       </div>
        
    </div>

    <div className="location-row-disp" style={{marginLeft:"120px"}}>
        <div className="location-form-field" style={{}}>
            <label style={{color:"black", marginLeft:"20px"}}>Phone No<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter phone no. .." />
          </div>

    <div className="vendor-form-field" style={{marginLeft:""}}>
        <label style={{marginLeft:"2px"}}>Country<span style={{ color: 'red' }}>*</span></label>
           <select required>
            <option value="">Choose Country</option>   
            <option value="IT">India</option>
            {/* Add locations dynamically or hardcode */}
            </select>
      </div> 

          <div className="vendor-form-field" style={{}}>
            <label style={{color:"black",marginLeft:"20px"}}>State<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter your state/province.." />
          </div>    
    </div>

    <div className="vendor-row-disp" style={{marginLeft:"120px"}}>
        <div className="vendor-form-field" style={{}}>
            <label style={{color:"black", marginLeft:"20px"}}>City</label>
              <input type="text" placeholder="enter City. .." />
          </div>

        <div className="vendor-form-field" style={{}}>
            <label style={{color:"black", marginLeft:"20px"}}>PIN CODE<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter pin code. .." />
          </div>


          <div className="vendor-form-field" style={{}}>
            <label style={{color:"black",marginLeft:"20px"}}>PAN<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter your PAN.." />
          </div>    

          <div className="vendor-form-field" style={{}}>
            <label style={{color:"black",marginLeft:"20px"}}>GST Number<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter your GST number.." />
          </div> 
    </div>

    <div className="vendor-row-disp" >
             <div className="vendor-form-field" style={{marginLeft: "180px"}}>
                <label style={{ color: "black", marginLeft: "1px" }}>
                  Address<span style={{ color: 'red' }}>*</span>
                </label>
                <textarea
                 style={{outline:"none" , border:"2px solid #ddd" , borderRadius:"5px" ,width:"110%"}}
                  rows="4"
                  cols="50"
                  placeholder="Enter Address..." >
                </textarea>
              </div>

              <div className="vendor-form-field" style={{marginLeft: ""}}>
                <label style={{ color: "black", marginLeft: "1px" }}>
                  Description
                </label>
                <textarea
                 style={{outline:"none" , border:"2px solid #ddd" , borderRadius:"5px", width:"110%"}}
                  rows="4"
                  cols="50"
                  placeholder="Enter Description..." >
                </textarea>
              </div>
        </div> 
        
        <h3 style={{marginLeft:"180px",marginTop:"3px"}}>Bank Details</h3>
        <hr style={{marginLeft:"180px",marginTop:"-15px"}}/>
        
    <div className="vendor-row-disp" style={{marginLeft:"120px"}}>
        <div className="vendor-form-field" style={{}}>
            <label style={{color:"black", marginLeft:"20px"}}>City</label>
              <input type="text" placeholder="enter City. .." />
          </div>

        <div className="vendor-form-field" style={{}}>
            <label style={{color:"black", marginLeft:"20px"}}>PIN CODE<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter pin code. .." />
          </div>


          <div className="vendor-form-field" style={{}}>
            <label style={{color:"black",marginLeft:"20px"}}>PAN<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter your PAN.." />
          </div>    

          <div className="vendor-form-field" style={{}}>
            <label style={{color:"black",marginLeft:"20px"}}>GST Number<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter your GST number.." />
          </div> 
    </div>
    
    <div className="vendor-row-disp" style={{marginLeft:"120px"}}>
        <div className="vendor-form-field" style={{}}>
            <label style={{color:"black", marginLeft:"20px"}}>IFS Code</label>
              <input type="text" placeholder="enter IFSC..." />
        </div>

        <div className="vendor-form-field" style={{}}>
            <label style={{color:"black", marginLeft:"20px"}}>Bank Branch Address<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter bank address. .." />
        </div>
    </div>
        <div className="vendor-form-field">
            <button type="submit" style={{ backgroundColor: "#afa24c",marginTop:"10px", 
             marginLeft:"140px" , width:"15%", padding:"5px" , fontSize:"14px" }}>
              Submit
            </button>
          </div>
        
        <hr style={{marginLeft:"180px"}}/>

        

      <h2 style={{marginLeft:"180px"}}>Location List</h2>

     <div className="search-box" style={{marginLeft:"180px", width:"20%" , marginTop:"4px"}}>
        <input type="text" placeholder="Search Item..." />
        <button className="search-btn"><i className="fas fa-search"></i></button>
      </div>

      {/* Export to Excel Button */}
      <button className="vendor-export-btn">Export to Excel</button>

      {/* Table */}
      <table className="vendor-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>ALT Code</th>
            <th>Name</th>
            <th>Contact Person</th>
            <th>Email</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
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
            <td><i className="fas fa-edit" style={{cursor:"pointer", marginRight:"20px"}} />
            <i className="fas fa-trash" />
            </td>
          </tr>
          {/* Add more sample rows if needed */}
        </tbody>
      </table>

      {/* Page Navigation Buttons */}
      <div className="vendor-navigation">
        <button>First</button>
        <button>Previous</button>
        <button>Next</button>
        <button>Last</button>
      </div>

      {/* Rows Per Page */}
      <div className="vendor-navigation">
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

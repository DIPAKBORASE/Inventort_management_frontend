import React,{useState} from "react";
import Select from "react-select";
import secondImage from "../../assets/Logo small.png";
import "./product.css";
import { Link } from "react-router-dom";


export default function Product() {
    const [isMastersDropdownOpen, setIsMastersDropdownOpen] = useState(false);
    const [isMistDropdownOpen, setIsMistDropdownOpen] = useState(false);
    const [isHistoryDropdownOpen, setIsHistoryDropdownOpen] = useState(false);
    const [isTooltipActive, setIsTooltipActive] = useState(false);

    const toggleMastersDropdown = () => {
        setIsMastersDropdownOpen(!isMastersDropdownOpen);
        setIsHistoryDropdownOpen(false); // Close other dropdowns
      };

    const ManufOptions = [
        { value: "dell", label: "Dell" },
        { value: "lenevo", label: "Lenevo" },
        { value: "hp", label: "HP" },
        // Add more options as needed
      ];

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
                        <li className="active">
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
                        <h1>Product</h1>
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
            <div className="product-section">
        <div className="product-row-disp">   
        <div className="product-search-box">
        <label>ALT CODE:</label>
        <input type="text" className="product-search-input" placeholder="enter alt code.." />
        </div>
          

       <div className="product-form-field" >
         <label style={{color:"black"}}>Name<span style={{ color: 'red' }}>*</span></label>
          <input type="text" placeholder="enter alt code.." />
       </div>
        
      <div className="product-form-field" >
        <label style={{marginLeft:"2px"}}>Group<span style={{ color: 'red' }}>*</span></label>
           <select required>
            <option value="">Choose Group</option>
            <option value="vadodra">CCTV Camera</option>
            {/* Add locations dynamically or hardcode */}
            </select>
      </div>

      <div className="product-form-field" style={{marginLeft:""}}>
        <label style={{marginLeft:"2px"}}>Department<span style={{ color: 'red' }}>*</span></label>
           <select required>
            <option value="">Choose Department</option>   
            <option value="IT">Accounts</option>
            {/* Add locations dynamically or hardcode */}
            </select>
      </div> 
    </div>
    
    <div className="product-row-disp">
              <div className="product-choose-manuf-field">
                <Select
                  isMulti
                  options={ManufOptions}
                  placeholder="Select manufacturer..."
                />
              </div>

  
            <div className="product-form-field" style={{}}>
            <label style={{color:"black"}}>Low Stock Quantity<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter quantity.." />
          </div>

          <div className="product-form-field" style={{}}>
            <label style={{color:"black"}}>GST %<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter GST value.." />
          </div>

          <div className="product-form-field" style={{}}>
            <label style={{color:"black"}}>Price<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter price.." />
          </div>
      </div>

    <div className="product-row-disp" style={{marginLeft:"280px"}}>
        <div className="product-form-fieldB" style={{}}>
            <label style={{color:"black", marginLeft:"20px"}}>Low Stock Quantity<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter quantity.." />
          </div>

          <div className="product-form-fieldB" style={{}}>
            <label style={{color:"black" ,marginLeft:"20px"}}>GST %<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter GST value.." />
          </div>

          <div className="product-form-fieldB" style={{}}>
            <label style={{color:"black",marginLeft:"20px"}}>Price<span style={{ color: 'red' }}>*</span></label>
              <input type="text" placeholder="enter price.." />
          </div>    
    </div>
    
    <div className="product-row-disp" style={{marginLeft:"300px"}}>
    
      <div className="product-circle-select">
                  <p>Category:<span style={{ color: 'red' }}>*</span></p><br/>
                  <label htmlFor="dateWise" style={{}}>
                  <input
                    type="radio"
                    id="capex"
                    name="radioOptions"
                    value="capex"
                    checked={selectedRadioOption === "capex"}
                    onChange={() => setSelectedRadioOption("capex")}
                  />
                  CAPEX
                </label>

                <label htmlFor="consolidate">
                  <input
                    type="radio"
                    id="opex"
                    name="radioOptions"
                    value="opex"
                    checked={selectedRadioOption === "opex"}
                    onChange={() => setSelectedRadioOption("opex")}
                  />
                  OPEX
                </label>
              </div>

              <label style={{ marginLeft:"50px" ,marginTop:"35px"}}>Department: <span style={{color:"red"}}>*</span></label>
        <label style={{marginLeft:"-100px" ,marginTop:"55px"}}><input type="radio" name="department" value="IT" /> IT</label>
        <label style={{marginLeft:"10px",marginTop:"55px"}}><input type="radio" name="department" value="Admin" /> Admin</label>
    </div>


    {selectedRadioOption === "capex" && (
            <>
              
            <div className="product-row-disp" >
                <div className="product-form-field" style={{marginLeft: "290px"}}>
                <label style={{ color: "black", marginLeft: "1px" }}>
                  Description
                </label>
                <textarea
                 style={{outline:"none" , border:"2px solid #ddd"}}
                  rows="4"
                  cols="50"
                  placeholder="Enter Description..." >
                </textarea>
              </div>
            </div> 
            </>
          )}

          {selectedRadioOption === "opex" && (

            <>

          <div className="product-row-disp" >
             <div className="product-form-field" style={{marginLeft: "290px"}}>
                <label style={{ color: "black", marginLeft: "1px" }}>
                  Description
                </label>
                <textarea 
                 style={{outline:"none" , border:"2px solid #ddd"}}
                  rows="4"
                  cols="50"
                  placeholder="Enter Description..." >
                </textarea>
              </div>
            </div>

          <div className="product-row-disp" >
              {/* Checkbox Field */}
              <input type="checkbox" style={{display:"flex", marginLeft:"-170px"}}/>
                <label for="tracking" style={{ color: "black", marginLeft: "-635px" , marginTop: "0px"}}>
                  Individual Tracking
                </label>

          </div>
            

            </>
          )}  
        
        <div className="product-form-field">
            <button type="submit" style={{ backgroundColor: "#afa24c",marginTop:"10px", 
             marginLeft:"280px" , width:"15%", padding:"5px" , fontSize:"14px" }}>
              Submit
            </button>
          </div>
        
        <hr style={{marginLeft:"300px"}}/>

      <h2 style={{marginLeft:"290px"}}>Product List</h2>

     <div className="search-box" style={{marginLeft:"290px", width:"20%" , marginTop:"4px"}}>
        <input type="text" placeholder="Search Item..." />
        <button className="search-btn"><i className="fas fa-search"></i></button>
      </div>

      {/* Export to Excel Button */}
      <button className="product-export-btn">Export to Excel</button>

      {/* Table */}
      <table className="product-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>ALT Code</th>
            <th>Name</th>
            <th>Group</th>
            <th>Unit</th>
            <th>Manufacturer</th>
            <th>Low Stock Qty</th>
            <th>Opening Stock Qty</th>
            <th>Opening TAX Value</th>
            <th>GST %</th>
            <th>Price (₹)</th>
            <th>Category</th>
            <th>Owner</th>
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
            <td>$550</td>
            <td></td><td></td><td></td><td></td>
            <td><i className="fas fa-edit" style={{cursor:"pointer", marginRight:"20px"}} />
            <i className="fas fa-trash" />
            </td>
          </tr>
          {/* Add more sample rows if needed */}
        </tbody>
      </table>

      {/* Page Navigation Buttons */}
      <div className="product-navigation">
        <button>First</button>
        <button>Previous</button>
        <button>Next</button>
        <button>Last</button>
      </div>

      {/* Rows Per Page */}
      <div className="product-navigation">
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

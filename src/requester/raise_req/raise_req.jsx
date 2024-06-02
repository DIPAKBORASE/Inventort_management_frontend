import React,{useState} from "react";
import secondImage from "../../assets/Logo small.png";
import "./rais.css";

export default function Raise_Request() {
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

      const [selectedRadioOption, setSelectedRadioOption] = useState("proc");


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
                    <li className="active">
                      <i className="fas fa-plus"></i> Raise Request
                    </li>
        
                    <li>
                      <i className="fas fa-history"></i> Request History
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
                        <h1>Raise Request</h1>
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
            <div className="rais-section">
    <div className="rais-row-disp" style={{ marginLeft:""}}>   
        
      <div className="rais-form-field" style={{marginLeft:""}}>
        <label>Location<span style={{ color: 'red' }}>*</span></label>
           <select required>
            <option value="">Select Location</option>
            <option value="vadodra">E tower</option>
            {/* Add locations dynamically or hardcode */}
            </select>
      </div>

      <div className="raisA-circle-select">
        <p>Department:<span style={{ color: 'red' }}>*</span></p><br/>
        <label htmlFor="IT">
            <input
            name="department"
            type="radio"
            value="IT" />            
            IT
        </label>

        <label htmlFor="Admin">
            <input
            name="department"
            type="radio"
            value="Admin" />
            Admin
        </label>
      </div>

    </div>
      

    
    <div className="rais-circle-select">
  <p>Type of Request:<span style={{ color: 'red' }}>*</span></p><br/>
  <label htmlFor="dateWise">
    <input
      type="radio"
      id="proc"
      name="radioOptions"
      value="proc"
      checked={selectedRadioOption === "proc"}
      onChange={() => setSelectedRadioOption("proc")}
    />
    Procurement
  </label>

  <label htmlFor="consolidate">
    <input
      type="radio"
      id="sereq"
      name="radioOptions"
      value="sereq"
      checked={selectedRadioOption === "sereq"}
      onChange={() => setSelectedRadioOption("sereq")}
    />
    Service Request
  </label>
</div>


      
        
      {/* Add the rest of your page content, such as tables, buttons, etc. */}

      {/* Table */}
      {selectedRadioOption === "proc" && (
            <>
              {/* Date Wise Table */}
            
              <div className="rais-search-box">
                <label>Search:</label>
                <input type="text" placeholder="Search Item..." />
                <button className="rais-search-btn"><i className="fas fa-search"></i></button>
              </div>
                {/* Export to Excel Button */}
            <button className="rais-export-btn">Export to Excel</button>
              <table className="rais-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Item</th>
            <th>UOM</th>
            <th>Quantity</th>
            <th>Per Unit Price(₹)</th>
            <th>Sub Total(₹)</th>
            <th>Action</th>

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
            <td><i className="fas fa-i" style={{cursor:"pointer", marginLeft:"30px"}} /></td>
          </tr>
          {/* Add more sample rows if needed */}
        </tbody>
      </table>

            {/* Page Navigation Buttons */}
            <div className="rais-navigation">
        <button>First</button>
        <button>Previous</button>
        <button>Next</button>
        <button>Last</button>
      </div>

      {/* Rows Per Page */}
      <div className="rais-navigation">
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

          {selectedRadioOption === "sereq" && (

            <>
         <div className="rais-row-disp" style={{marginLeft:""}}>   
            <div className="rais-form-field" style={{marginLeft:""}}>
              <label>Type of Issue<span style={{ color: 'red' }}>*</span></label>
              <select required>
              <option value="">Select Issue</option>
              <option value="vadodra">Application</option>
              {/* Add locations dynamically or hardcode */}
              </select>
            </div>
      
         </div>

         <div className="rais-row-disp" style={{marginLeft:"30px" , marginTop:"30px"}}>
                <div className="rais-form-field" style={{marginLeft: ""}}>
                <label style={{ color: "black", marginLeft: "1px" }}><span style={{ color: 'red' }}>*</span>
                  Description
                </label>
                <textarea
                 style={{outline:"none" , border:"2px solid #ddd" , borderRadius:"5px"}}
                  rows="4"
                  cols="50"
                  placeholder="Enter Description..." >
                </textarea>
              </div>
          </div>

          <div className="raisB-row-disp" style={{marginLeft:""}}>   
              <div className="rais-form-field" style={{marginLeft:""}}>
              <label>Priority<span style={{ color: 'red' }}>*</span></label>
              <select required placeholder="">
              <option value="">Select Priority</option>
              <option value="vadodra">Low</option>
              {/* Add locations dynamically or hardcode */}
              </select>
              </div>
      
         </div> 
            </>
          )}  
      
    
    
    </div> 

</div>
</>
    );        
}

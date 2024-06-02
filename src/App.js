import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homeboard from "./homeboard/homeboard";
import Inward_material from "./inward_material/inward_mat";
import Login from "./login/login";
import Dispatch from "./dispatch/dispatch";
import Inward_Hist from "./inward_history/inward_hist";
import Disp_Hist from "./dispatch_history/disp_hist";
import Low_Stock from "./low_stock alerts/lowstock_alerts";
import PO_History from "./po_history/po_hist";
import Track_Opex from "./track_opex/track_opex";
import Track_Capex from "./track_capexz/track_capex";
import Track_Asset from "./track_asset/track_asset";
import Track_User_Asset from "./track_user_asset/track_user_ast";
import Material_Receipt from "./reports/material_recpt/material_recpt";
import Consump_Report from "./reports/consumption/consump";
import Item_Stock from "./reports/item_stock/item_stock";
import Challan_Summary from "./reports/challan_summ/challan_summ";
import Issue_Tracker from "./reports/issue_tracker/issue_tracker";
import YTD_MTD from "./reports/ytd mtd/ytd&mtd";
import Product from "./masters/product/product";
import Location from "./masters/location/location";
import Vendor from "./masters/vendor/vendor";
import User from "./masters/user/user";
import Unit from "./masters/unit/unit";
import Issue from "./masters/issue_type/issue";
import Department from "./masters/department/department";
import Raise_Request from "./requester/raise_req/raise_req";
import Request_History from "./requester/req_history/req_hist";

function App() {
  return (
     <>
     <BrowserRouter>
      <Routes>
          {/* <Route path="/" element={<Login/>} /> */}
          {/* <Route path="/" element={<Login/>} /> */}
          <Route path="/" element={<Homeboard/>} />
          <Route path="homeboard" element={<Homeboard/>} />
          <Route path="inward_material" element={<Inward_material/>} />
          <Route path="inward_history" element={<Inward_Hist/>} />
          <Route path="dispatch" element={<Dispatch/>} />
          <Route path="dispatch_history" element={<Disp_Hist/>} />
          <Route path="low_stock_alert" element={<Low_Stock/>} />
          <Route path="po_history" element={<PO_History/>} />
          <Route path="track_asset" element={<Track_Asset/>} />
          <Route path="track_user_asset" element={<Track_User_Asset/>} />
          <Route path="track_opex_stock" element={<Track_Opex/>} />
          <Route path="track_capex_stock" element={<Track_Capex/>} />
          <Route path="material_receipt_report" element={<Material_Receipt/>} />
          <Route path="consumption_report" element={<Consump_Report/>} />
          <Route path="itemwise_stock_report" element={<Item_Stock/>} />
          <Route path="challan_summary_report" element={<Challan_Summary/>} />
          <Route path="issue_tracker_report" element={<Issue_Tracker/>} />
          <Route path="ytd_mtd_report" element={<YTD_MTD/>} />
          <Route path="product" element={<Product/>} />
          <Route path="location" element={<Location/>} />
          <Route path="vendor" element={<Vendor/>} />
          <Route path="user" element={<User/>} />
          <Route path="unit" element={<Unit/>} />
          <Route path="issue_type" element={<Issue/>} />
          <Route path="department" element={<Department/>} />
          <Route path="raise_request" element={<Raise_Request/>} />
          <Route path="request_history" element={<Request_History/>} />

      </Routes>
     
     
     
     </BrowserRouter>
     {/* <Login/> */} 
     {/* <Homeboard/> */}
     {/* <Inward_material /> */}
      {/* <Dispatch/> */}
     {/* <Inward_Hist/>    */}
     {/* <Disp_Hist/>  */}
     {/* <Low_Stock/> */}
     {/* <PO_History/> */}
     {/* <Track_Opex/> */}
     {/* <Track_Capex /> */}
     {/* <Track_Asset/> */}
     {/* <Track_User_Asset/> */}
     {/* <Material_Receipt/>  */}
     {/* <Consump_Report/> */}
     {/* <Item_Stock/> */}
     {/* <Challan_Summary/> */}
     {/* <Issue_Tracker/> */}
     {/* <YTD_MTD/> */}
     {/* <Product/> */}
     {/* <Location/> */}
     {/* <Vendor/> */}
     {/* <User/> */}
     {/* <Unit/> */}
     {/* <Issue/> */}
     {/* <Department/> */}
     {/* <Raise_Request/> */}
     {/* <Request_History/> */}
     

     </>

  );
}

export default App;

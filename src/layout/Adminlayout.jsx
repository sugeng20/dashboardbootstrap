/* eslint-disable react/prop-types */
import SCLOGO from "../assets/img/sc-logo.png";
import { Outlet } from "react-router-dom";

const Adminlayout = () => {
  return (
    <div className="admin-layout">
      <div className="admin-header"></div>

      <div className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div className="admin-sidebar-logo">
            <img src={SCLOGO} alt="" className="img-logo" />
            <h1 className="logo-name">Simple Coding</h1>
          </div>
        </div>
        <div className="admin-sidebar-menu"></div>
      </div>

      <div className="admin-content">
        <div className="admin-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Adminlayout;

import "bootstrap/dist/css/bootstrap.min.css";
import UpdatedHeader from "../UpdatedHeader/UpdatedHeader";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState("My Profile");

  return (
    <>
      <UpdatedHeader />
      <div
        className="d-flex-end flex-column flex-shrink-0 p-3 text-bg-dark border border-primary"
        style={{ marginTop: "80px", width: "280px", height: "100vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          previewlistener="true"
        >
          <span className="fs-4">ACCOUNT</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item p-2">
            <NavLink
              to="/MyProfile"
              className="nav-link text-white"
              activeClassName="active"
            >
              My Profile
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/MyUploads"
              className="nav-link text-white"
              activeClassName="active"
            >
              My Uploads
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/MyRequests"
              className="nav-link text-white"
              activeClassName="active"
            >
              My Requests
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/"
              className="nav-link text-white"
              activeClassName="active"
            >
              Sign Out
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
};

export default Sidebar;

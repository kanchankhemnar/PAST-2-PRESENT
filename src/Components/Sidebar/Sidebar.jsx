import "bootstrap/dist/css/bootstrap.min.css";
// import UpdatedHeader from "../UpdatedHeader/UpdatedHeader";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthContext";
import { useContext } from "react";

import Header from "../Header/Header";

const Sidebar = () => {
 const { token, logout } = useContext(AuthContext);



  return (
    <>
      <Header />
      <div
        className="d-flex-end flex-column flex-shrink-0 p-3 text-bg-dark border border-primary"
        style={{ marginTop: "80px", width: "280px" ,position: "fixed",
        right: 0,
    }}
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
          <li className="p-2" onClick={logout }>
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

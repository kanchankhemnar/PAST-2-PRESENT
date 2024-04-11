import "bootstrap/dist/css/bootstrap.min.css"
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { AuthContext } from "../ContextAPI/AuthContext";

// const [error, setError] = useState();

const Header=()=>{
  // const [myData, setMyData] = useState(null);
  // const [error, setError] = useState(null);
const {loggedin}=useContext(AuthContext);
  const token = localStorage.getItem('token');
  console.log(token);





return <>
<div style={{width:"100vw"}} className="fixed-top">
<header className="p-3 bgColor " style={{border:"3px solid white" }}>


    <div >
     
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start " style={{color:"white"}}>
      <h2 className="mx-5">P2P</h2>
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" previewlistener="true">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to="/" className="nav-link px-2 text-secondary">Home</NavLink></li>
          <li><NavLink to={loggedin?"/SellerForm":"/Login"}  href="#" className="nav-link px-2 text-white">
          Sell
          </NavLink></li>
          <li><NavLink to="/Requests"  href="#" className="nav-link px-2 text-white">Requests</NavLink></li>
         
          <li><NavLink to="/AboutUs"  className="nav-link px-2 text-white">About</NavLink></li>
        </ul>
<div className="d-flex mx-5">
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" >
          <input type="search" className="form-control form-control-dark text-bg-light" placeholder="Search..." aria-label="Search"  />
        </form>

       
        <div className="text-end">
  {token ? (
    <button type="button" className="btn btn-outline-light me-2">
      <Link to="/MyProfile" style={{ textDecoration: "none", color: "white" }}>
        Profile
      </Link>
    </button>
  ) : (
    <button type="button" className="btn btn-outline-light me-2">
      <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>
        Login
      </Link>
    </button>
  )}
</div>

</div>
      </div>
    </div>
  </header>
  </div>

</>
}
export default Header;

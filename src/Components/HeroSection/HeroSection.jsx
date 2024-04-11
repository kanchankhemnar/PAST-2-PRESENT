import "bootstrap/dist/css/bootstrap.min.css"
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthContext";
import "./HeroSection.css"
const HeroSection=()=>{
const {loggedin}=useContext(AuthContext);

  return <>
<div style={{border:"50px solid white"}}>
  <div style={{border:"150px solid black", borderRadius:"20px"}}>
  <div className=" p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border  ">
      <div className=" p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 " style={{color:"white",fontSize:"80px" , fontFamily:"serif"}}>Welcome to Past-2-Present </h1>
        <h5 style={{color:"gray",marginBottom:"25px",width:"max-content",marginLeft:"17%"}}>
          
          <br /> Selling your items has now become easier with just one click below. </h5>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
         <br />
          <button type="button" className="btn btn-outline-primary btn-lg px-4" style={{marginLeft:"40%"}}>
            <NavLink  style={{textDecoration:"none"}} to={loggedin?"/SellerForm":"/Login"}>SELL</NavLink></button>
        </div>
      </div>
      <div className="col-lg-4  overflow-hidden shadow-lg">

      </div>
    </div>
    </div>
    </div>
  </>
}
export default HeroSection;

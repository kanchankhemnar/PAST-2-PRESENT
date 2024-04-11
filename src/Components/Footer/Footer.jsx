
import "bootstrap/dist/css/bootstrap.min.css"
import "./bgColor.css"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../ContextAPI/AuthContext";

const Footer=()=>{

  const {loggedin}=useContext(AuthContext);
  return <>
  <div class="bgColor " style={{}}>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
    <h4 class="col-md-4 mb-0 text-body-light" style={{color:"white",padding:"70px"}}>© 2024 Past2Present, PICT</h4>
   

    <ul class="nav col-md-6 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-4 text-body-light">
        <h5>
          <NavLink to={"/"} style={{textDecoration:"none"}}> Home</NavLink>
         </h5> </a></li>
      <li class="nav-item"><a href="#" class="nav-link px-4 text-body-light">
      <h5> <NavLink to={loggedin?"/SellerForm":"/Login"} style={{textDecoration:"none"}}> Sell</NavLink></h5></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-4 text-body-light">
      <h5> <NavLink to={"/"} style={{textDecoration:"none"}}> Requests</NavLink></h5></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-4 text-body-light">
      <h5> <NavLink to={"/"} style={{textDecoration:"none"}}> About us</NavLink></h5></a></li>
      <li class="nav-item"><a href="http://pict.edu" class="nav-link px-4 text-body-light"><h5>PICT</h5></a></li>
    </ul>
  </footer>
  </div>
  </>
}

export default Footer;
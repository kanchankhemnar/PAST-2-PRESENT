import "bootstrap/dist/css/bootstrap.min.css"
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

// const [error, setError] = useState();

const Header=()=>{
  // const [myData, setMyData] = useState(null);
  // const [error, setError] = useState(null);

  const token = localStorage.getItem('token');
  console.log(token);


  // const handleSubmit = async (e) =>{
  //   e.preventDefault();
  //   try {
  
  //     const response = await axios.get(
  //       `https://past-2-present-backend-1.onrender.com/items/:+${search_item}`
  //     );
  //     if (response.status === 200) {
  //       console.log("item searched", response.data);
  //       setMyData(response.data[0]);
        
  //     }else {
  //       console.error('item not registered');
  //       // Handle logout failure
  //   }
  //   }
  //    catch (error) {
  //     // setError("Logout unsuccessful");
  //     console.error('Error during item registration:', error);
  //     //handle logout
  //   }
  // };


const handleCLick = async (e) => {if(token) {
  e.preventDefault();
  try {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');

    // Make a DELETE request to the logout endpoint
        const response = await axios.delete('https://past-2-present-backend-1.onrender.com/user/logout', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Include the token in the Authorization header
            }
        });
    
    // Handle successful response
    if (response.status === 200) {
                  console.log('Logged out successfully');
                  //console.log(token)
                  localStorage.removeItem('token');
                  console.log(token);
                  //delete token
                  // Perform any additional actions upon successful logout
              } else {
                  console.error('Logout failed');
                  // Handle logout failure
              }
  } catch (error) {
    // setError("Logout unsuccessful");
    console.error('Error during logout:', error);
    //handle logout
  }
}};





return <>
<div style={{width:"100vw"}} className="fixed-top">
<header className="p-3 text-bg-dark " style={{border:"3px solid white" }}>


    <div className="container">
     
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <h2>Past2Present</h2>
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" previewlistener="true">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to="/" className="nav-link px-2 text-secondary">Home</NavLink></li>
          <li><NavLink to={token? "/SellerForm" : "/Login"}  href="#" className="nav-link px-2 text-white">Sell</NavLink></li>
          <li><NavLink to="/"  href="#" className="nav-link px-2 text-white">Requests</NavLink></li>
         
          <li><NavLink to="/"  className="nav-link px-2 text-white">About</NavLink></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" name="search_item" className="form-control form-control-dark text-bg-light" placeholder="Search..." aria-label="Search"  />
        </form>

        <div className="text-end">
          {token? <ProfileIcon/> : null}
          
          <button type="button" className="btn btn-outline-light me-2" onClick={handleCLick}>
            {/* <Link to="/Login" style={{textDecoration:"none",color:"white"}} >
            Login
            </Link> */}
            <Link to={{pathname: token ? '/' : '/Login'}} style={{textDecoration:"none",color:"white"}} >
            {token? 'Log out' : 'Login'}
            </Link>
            </button>

        </div>
      </div>
    </div>
  </header>
  </div>

</>
}
export default Header;
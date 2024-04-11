import React from "react";
import "./SignUp.css"
import Redirect, { useState, useEffect } from "react";
import axios from "axios";
import "../LoginForm/redirect.css"

import {useNavigate}  from "react-router-dom";


const SignUp = () => {
  const [name, setName] = useState();
  const [reg_no, setReg_no] = useState();
  const [department, setDepartment] = useState();
  const [current_year, setCurrent_year] = useState();
  const [email, setEmail] = useState();
  const [phone_no, setPhone_no] = useState();
  const [user_password, setUser_Password] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState();

  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://past-2-present-backend-1.onrender.com/user/signup",
        {
          name: name,
          reg_no: reg_no,
          department: department,
          current_year:current_year,
          email:email,
          phone_no:phone_no,
          user_password:user_password,
        }
      );
      // Handle successful login (e.g., redirect to dashboard)
      // setResponseStatus(response.status);
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token); // Store token in local storage
        setLoggedIn(true);
        console.log(token);
        alert("registration successfull");
        navigate("/MyProfile");
      }
    } catch (error) {
      console.error("Error in registering", error);
      alert("Enter details correctly");
      setError("Error in registering");
    }

  };


  return (
    <div className='form2' style={{background:"white"}}>
      {/* <img id='checkout' src={Checkout} alt="" /> */}
      {/* <h3>Home &lt; Sell</h3> */}
      <div className="container2" >
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit} action="post">

          <label htmlFor="">Enter Name</label>
          <input type="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name' />

          <label htmlFor="">Registration no. of PICT</label>
          <input type="text" 
           value={reg_no}
           onChange={(e) => setReg_no(e.target.value)}
           placeholder='' />

          <label htmlFor="">Department</label>
          <select 
           value={department}
           onChange={(e) => setDepartment(e.target.value)}
           name="" id="" class="form-control">
          <option value="CS">Computer Science</option>
          <option value="IT">Information Technology</option>
          <option value="ENTC">EnTC</option></select>

          {/* <label htmlFor="">Street Address</label>
          <input type="text" 
           value={name}
           onChange={(e) => setName(e.target.value)}
           placeholder='' /> */}

          {/* <label htmlFor="">Town/City</label>
          <input type="text" placeholder='' /> */}

          <label htmlFor="">Current year</label>
          <select 
           value={current_year}
           onChange={(e) => setCurrent_year(e.target.value)}
           name="" id="" class="form-control">
          <option value="1">FE</option>
          <option value="2">SE</option>
          <option value="3">TE</option>
          <option value="4">BE</option></select>


          <label htmlFor="">Email address</label>
          <input type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='' />

          <label htmlFor="">Phone number</label>
          <input type="text" 
          value={phone_no}
          onChange={(e) => setPhone_no(e.target.value)}
          placeholder='' />

          <label htmlFor="">Password</label>
          <input type="password" 
          value={user_password}
          onChange={(e) => setUser_Password(e.target.value)}
          placeholder='' />

          {console.log(name)}
          {console.log(reg_no)}
          {console.log(department)}
          {console.log(current_year)}
          {console.log(email)}
          {console.log(phone_no)}
          {console.log(user_password)}

          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}



export default SignUp;
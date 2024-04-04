import React from "react";
import "./LoginForm.css";
import Redirect, { useState, useEffect } from "react";
import axios from "axios";
import "./redirect.css"
import { Link, redirect } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [user_password, setUser_Password] = useState();
  const [error, setError] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://past-2-present-backend-1.onrender.com/user/login",
        {
          email: email,
          user_password: user_password,
        }
      );
      // Handle successful login (e.g., redirect to dashboard)
      // setResponseStatus(response.status);
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token); // Store token in local storage
        setLoggedIn(true);
        console.log(token);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid username or password");
    }

  };

  if (loggedIn) {
    return <RedirectedComponent />;
    // return redirect("/");
  } 
  // else {
  //   alert("Please enter correct email and password");
  // }

  //console.log(loggedIn);

  // if (loggedIn) {
  //   // Redirect to home page after successful login
  //   <Redirect to="/" />;
  // }

  // useEffect(() => {
  //   if (loggedIn) {
  //     // Redirect to home page after loggedIn is true
  //     // Using setTimeout to ensure the component has completed its render cycle
  //     setTimeout(() => {
  //       window.location.href = "/"; // or use history.push("/") for programmatic navigation
  //     }, 0);
  //   }
  // }, [loggedIn]);

  return (
    <div className="bgLogin">
      <div className=" newcontainer " style={{ marginTop: "100px" }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} action="post">
          <label htmlFor="">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={user_password}
            onChange={(e) => setUser_Password(e.target.value)}
          />
          {/* {console.log(email)} */}
          {/* {console.log(user_password)} */}

          <br />
          <button type="submit">Login</button>
          <br />
          <p>
            {"Didn't create an account?"+" " }
            <a href="">
              <Link to="/SignUp" style={{ textDecoration: "none"}}>
                 Sign Up
              </Link>
            </a>
          </p>
        </form>
      </div>
      {/* {loggedIn && <Redirect to="/" />} */}
    </div>
  );
};

const RedirectedComponent = ({ message }) => {
  return (
    <div className="container">
      {/* Redirected component */}
      <h2 style={{color: "white"}}>Logged in successfully</h2>
      <p style={{color: "grey"}}>Go back to home</p>
      <Link to="/" style={{color:"white"}}><h1>Home</h1></Link>
    </div>
  );
};

export default LoginForm;
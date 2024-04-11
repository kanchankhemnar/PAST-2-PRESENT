import React, { useContext } from "react";
import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";
import "./redirect.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthContext";

const LoginForm = () => {
  const { login, setLoggedin } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [user_password, setUser_Password] = useState();
  const [error, setError] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("entered");
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
        login(token);
        setLoggedin(true);
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid username or password");
    }
  };

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

          <br />
          <button type="submit" className="loginUpButton">
            Login
          </button>
          <br />
          <p>
            {"Don't have an account?" + " "}
            <a href="" >
              <Link to="/SignUp" style={{ textDecoration: "none" }} className="signUpButton">
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

export default LoginForm;

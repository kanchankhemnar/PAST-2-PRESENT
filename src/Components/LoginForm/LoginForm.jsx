import React from "react";
import "./LoginForm.css";

import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="bgLogin">
      <div className=" newcontainer " style={{ marginTop: "100px" }}>
        <h1>Login</h1>
        <form action="">
          <label htmlFor="">Email address</label>
          <input type="email" placeholder="" />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="" />
          <br />
          <button>Login</button>
          <br />
          <p>
            Didn't created an Account?
            <a href="">
              <Link to="/SignUp" style={{ textDecoration: "none" }}>
                Sign Up
              </Link>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

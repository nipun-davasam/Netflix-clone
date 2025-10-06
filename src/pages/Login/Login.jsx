import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const [signed, setSigned] = useState("Sign In");
  return (
    <div className="login-page">
      <img src={logo} className="login_logo" alt="" />

      <div className="login-form">
        <h1>{signed}</h1>
        <form action="">
          {signed === "Sign Up" ? (
            <input type="text" placeholder="Enter Your Name" />
          ) : (
            <></>
          )}
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button className="">{signed}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signed === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={()=>{setSigned("Sign Up")}}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={()=>{setSigned("Sign In")}}>Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;

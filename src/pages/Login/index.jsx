import React, { useState, useEffect } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { Button, Input, Footer } from "../../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState("");

  const handleLogin = () => {
    if (email && password) {
      setError(false);
      setSuccess("Login successful!");
    } else {
      setError(true);
      setSuccess("Incorrect login details");
    }
  };

  return (
    <div className="login-box">
      <h3 className="login-heading">LOGIN</h3>
      <div className="login-container">
        <label>Email</label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          value={email}
          type="email"
          placeholder="email"
        />
        <label>Password</label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          error={error}
          value={password}
          success={success}
          type="password"
          placeholder="password"
        />
        <a href="#">
          <h6 className="login-forgot-heading">Zabudol/Zabudla som heslo</h6>
        </a>
        <Button className="login-button">Log In</Button>
        <h5>or</h5>
        <div>
          <NavLink to="/registration" exact>
            <Button onClick={handleLogin} className="signup-button">
              Sign Up
            </Button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

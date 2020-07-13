import React, { useState, useEffect } from "react";
import "./Login.css";
import useSignUpForm from "../../components/Hooks";
import { NavLink } from "react-router-dom";
import { Button, Input, Footer } from "../../components";

const Login = () => {
  const signup = () => {
    inputs.value
      ? alert("You are logged in!")
      : alert("You have to fill in all the fields first");
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      email: "",
      password: "",
    },
    signup
  );

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <h3 className="login-heading">LOGIN</h3>
        <div className="login-container">
          <label>Email</label>
          <Input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            placeholder="email"
            required
          />
          <label>Password</label>
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputChange}
            value={inputs.password}
          />
          <a href="#">
            <h6 className="login-forgot-heading">Zabudol/Zabudla som heslo</h6>
          </a>
          <Button className="login-button" type="submit">
            Log In
          </Button>
          <h5>or</h5>
          <div>
            <NavLink to="/registration" exact>
              <Button className="signup-button">Sign Up</Button>
            </NavLink>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;

import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav>
    <div className="logo">POSUŇ ĎALEJ</div>
    <div className="navigation">
      <NavLink className="home-link" to="/home" exact>
        Home
      </NavLink>
      <NavLink to="/shop" exact>
        Shop
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
    </div>
  </nav>
);

export default NavBar;

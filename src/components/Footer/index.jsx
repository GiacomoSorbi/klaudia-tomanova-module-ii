import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <>
    <div className="footer-wrapper">
      <div className="footer-text">
        <NavLink to="/about" exact>
          <span>About</span>
        </NavLink>
        <NavLink to="*">
          <span>Contact</span>
        </NavLink>
        <NavLink to="*">
          <span>FAQs</span>
        </NavLink>
      </div>
      <div className="footer-social">
        <a className="social" href="*">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="social" href="*">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  </>
);

export default Footer;

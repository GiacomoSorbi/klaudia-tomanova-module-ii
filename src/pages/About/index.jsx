import React from "react";
import logo from "../../404.svg";
import "./About.css";
import { Footer } from "../../components";

const About = () => (
  <>
    <div className="about-box">
      <div className="about-container">
        <img alt="404" src={logo} />
      </div>
    </div>
    <Footer />
  </>
);

export default About;

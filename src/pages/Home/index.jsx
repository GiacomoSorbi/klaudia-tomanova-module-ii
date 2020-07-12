import React from "react";
import hero from "../Home/hero.jpg";
import { Button, Footer } from "../../components";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <img id="hero-img" src={hero} alt="Logo" />
    <div className="heading">
      <h1>Nakupuj zodpovedne</h1>
      <h3>Slovenský online sekáč vytvorený ľuďmi</h3>
      <div>
        <Link to="/shop">
          <Button>Kupujem</Button>
        </Link>
        <Link to="/login">
          <Button>Predávam</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;

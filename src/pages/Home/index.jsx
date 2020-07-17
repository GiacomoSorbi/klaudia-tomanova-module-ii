import React from "react";
import hero from "../Home/hero.jpg";
import { Button, Footer } from "../../components";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <img id="hero-img" src={hero} alt="Logo" />
    <div className="heading">
      <h1>Shop responsibly</h1>
      <h3>First Slovak online second-hand shop created by people</h3>
      <div>
        <Link to="/shop">
          <Button>Buy</Button>
        </Link>
        <Link to="/login">
          <Button>Sell</Button>
        </Link>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;

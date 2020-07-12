import React from "react";
import "./Shop.css";
import { Footer, Cart } from "../../components";
import data from "../../data";

const items = data.items;

const Shop = () => (
  <>
    <div className="shop-box">
      <div className="shop-container">
        <Cart initialItems={items} />
      </div>
    </div>
    <Footer />
  </>
);

export default Shop;

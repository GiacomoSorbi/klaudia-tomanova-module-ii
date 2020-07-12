import React from "react";
import { NavLink } from "react-router-dom";
import "./CartItem.css";
import { Button } from "../index";
import data from "../../data";

const CartItem = ({ id, name, price, qty, img }) => {
  //  const handleClick = (initialItems, e) => {
  //    console.log(e.item.value, item);
  //  };

  const alertButton = () => {
    alert("Button clicked!");
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <NavLink className="item-img" to="/shop/product-details" exact>
          <img src={img} />
        </NavLink>
        <div className="item-name">{name}</div>
        <div className="item-price">${price}</div>
        <Button
          className="cart-item-button"
          onClick={alertButton}
          type="submit"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default CartItem;

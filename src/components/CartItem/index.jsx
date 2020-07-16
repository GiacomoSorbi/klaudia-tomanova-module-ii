import React from "react";
import { NavLink } from "react-router-dom";
import "./CartItem.css";
import { Button } from "../index";

const CartItem = ({ id, name, price, qty, img }) => {
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <NavLink className="item-img" to="/shop/product-details" exact>
          <img alt="product for sale" src={img} />
        </NavLink>
        <div className="item-name">{name}</div>
        <div className="item-price">${price}</div>
        <Button disabled className="cart-item-button" type="submit">
          Sold Out
        </Button>
      </div>
    </div>
  );
};

export default CartItem;

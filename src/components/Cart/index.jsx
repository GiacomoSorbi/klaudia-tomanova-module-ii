import React from "react";
import { CartItem } from "../../components";
import "./Cart.css";

const Cart = ({ initialItems }) => {
  return (
    <div className="cart">
      <h1>Browse Current Items</h1>
      <div className="cart-container">
        <div className="cart-items">
          {initialItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;

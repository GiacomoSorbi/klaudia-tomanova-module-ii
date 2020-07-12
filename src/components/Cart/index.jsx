import React from "react";
import { CartItem } from "../../components";
import "./Cart.css";

const Cart = ({ initialItems }) => {
  //item quantity times item price will return the cart total using reduce
  //toFixed will round the decimal point to two spots
  const total = initialItems
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h1>Browse Current Items</h1>
      <div className="cart-container">
        <div className="cart-items">
          {initialItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div>Total: ${total}</div>
      </div>
    </div>
  );
};

export default Cart;

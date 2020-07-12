import React from "react";
import "./Button.css";

const Button = ({ className, children, type }) => (
  <button className={className} type={type}>
    {children}
  </button>
);

export default Button;

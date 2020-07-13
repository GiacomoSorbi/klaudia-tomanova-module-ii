import React from "react";
import "./Button.css";

const Button = ({ disabled, className, children, type }) => (
  <button disabled={disabled} className={className} type={type}>
    {children}
  </button>
);

export default Button;

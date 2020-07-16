import React from "react";
import "./Input.css";

const Input = ({
  name,
  className,
  onChange,
  value,
  type = "text",
  placeholder = "Type something here..",
  children,
}) => (
  <input
    name={name}
    className={className}
    onChange={onChange}
    value={value}
    type={type}
    placeholder={placeholder}
  >
    {children}
  </input>
);

export default Input;

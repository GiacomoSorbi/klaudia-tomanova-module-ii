import React from "react";
import "./Input.css";

const Input = ({
  success,
  error,
  name,
  className,
  onChange,
  value,
  type = "text",
  placeholder = "Type something here..",
  children,
}) => (
  <input
    success={success}
    error={error}
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

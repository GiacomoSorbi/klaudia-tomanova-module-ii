import React, { useState } from "react";
import useSignUpForm from "../../components/Hooks";
import "./Registration.css";
import { Button, Input, Footer } from "../../components/index";

const Registration = () => {
  const signup = () => {
    alert(`UserCreated! Name: ${inputs.name} Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      name: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
    },
    signup
  );

  //test disable button
  //const [disabled, setDisabled] = useState(true);
  //const handleButtonDisabled = () => {
  //  setDisabled(!disabled);
  //};

  return (
    <div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="registration-container">
          <div className="input-field">
            <label>Name</label>
            <Input
              className="reg-input"
              type="text"
              name="name"
              onChange={handleInputChange}
              value={inputs.name}
              required
            />
          </div>
          <div className="input-field">
            <label>Email</label>
            <Input
              className="reg-input"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
              required
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <Input
              className="reg-input"
              type="password"
              name="passwordOne"
              onChange={handleInputChange}
              value={inputs.passwordOne}
            />
          </div>
          <div className="input-field">
            <label>Confirm Password</label>
            <Input
              className="reg-input"
              type="password"
              name="passwordTwo"
              onChange={handleInputChange}
              value={inputs.passwordTwo}
            />
          </div>
          <Button className="signup-button" type="submit">
            Sign Up
          </Button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Registration;

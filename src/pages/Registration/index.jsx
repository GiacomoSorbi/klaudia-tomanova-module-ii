import React, { useState } from "react";
import useSignUpForm from "../../components/Hooks";
import "./Registration.css";
import { Button, Input, Footer } from "../../components/index";

const Registration = () => {
  const signUp = () => {
    if (inputs.name === undefined) {
      alert("You have to fill in all the fields first");
    } else if (inputs.email === undefined) {
      alert("You have to fill in all the fields first");
    } else if (inputs.passwordOne === undefined) {
      alert("You have to fill in all the fields first");
    } else if (inputs.passwordTwo === undefined) {
      alert("You have to fill in all the fields first");
    } else {
      alert(`UserCreated! Name: ${inputs.name} Email: ${inputs.email}`);
    }
  };

  // disabling the sign up button
  //const [disabled, setDisabled] = useState(true);
  //const buttonDisabled = () => {
  //  {
  //    if (inputs.name === undefined) {
  //      disabled;
  //    } else if (inputs.email === undefined) {
  //      disabled;
  //    } else if (inputs.passwordOne === undefined) {
  //     disabled;
  //    } else if (inputs.passwordTwo === undefined) {
  //     disabled;
  //    } else {
  //      setDisabled(false);
  //    }
  //  }
  // };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      name: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
    },
    signUp
  );

  return (
    <div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="registration-container">
          <div className="input-field">
            <label>Name</label>
            <Input
              placeholder="Lucy"
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
              placeholder="lucy@gmail.com"
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
              placeholder="YourUniquePassword123!"
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
              placeholder="YourUniquePassword123!"
              className="reg-input"
              type="password"
              name="passwordTwo"
              onChange={handleInputChange}
              value={inputs.passwordTwo}
            />
          </div>
          <Button
            // disabled={buttonDisabled}
            className="signup-button"
            type="submit"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Registration;

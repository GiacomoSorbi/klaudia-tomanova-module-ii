import React from "react";
import logo from "../../404.svg";
import "./ProductDetails.css";
import { Footer } from "../../components";

const ProductDetails = (props) => {
  console.log(props.match.params.id);
  return (
    <>
      <div className="product-details-box">
        <div className="product-details-container">
          <img alt="404" src={logo} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;

import React from "react";
import "./ProductDetails.css";
import { Footer } from "../../components";

const ProductDetails = (props) => {
  console.log(props.match.params.id);
  return (
    <>
      <div className="product-details-box">
        <div className="product-details-container">Product</div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;

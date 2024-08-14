import React, { Component, useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="col-3 m-4">
      <div className="row">
        <img src={productImage} alt={productName} className="img-thumbnail" />
      </div>
      <div className="row mt-3">
        <p>
          <b>{productName}</b>
        </p>
      </div>
      <div className="row">
        <p>${price}</p>
      </div>
      <div className="row justify-content-center">
        <button
          className="btn btn-outline-dark w-auto position-relative"
          onClick={() => addToCart(id)}
        >
          Add To Cart{" "}
          {cartItemAmount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
              {cartItemAmount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Product;

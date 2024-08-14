import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  //console.log(cartItems);

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p className="h1 m-4">Your Cart Items</p>
        </div>
      </div>
      <div className="row">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null; // Ensure the map returns something for every iteration
        })}
      </div>
      {totalAmount > 0 ? (
        <>
          <div className="row my-3">
            <p className="col">Subtotal: ${totalAmount}</p>
          </div>
          <div className="row justify-content-center">
            <button
              className="btn btn-dark w-auto me-3"
              onClick={() => {
                navigate("/");
              }}
            >
              Continue Shopping
            </button>
            <button className="btn btn-dark w-auto">Checkout</button>
          </div>
        </>
      ) : (
        <div className="row justify-content-center">
          <div className="col">
            <p className="h4 m-4">Your Cart Is Empty</p>
          </div>
          <div className="row justify-content-center mt-3">
            <button
              className="btn btn-dark w-auto"
              onClick={() => {
                navigate("/");
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

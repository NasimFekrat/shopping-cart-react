import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="row border border-secondary rounded p-0">
      <div className="col-5 m-2">
        <img src={productImage} alt={productName} className="img-thumbnail" />
      </div>
      <div className="col-5 my-auto">
        <div className="row mt-3">
          <p>
            <b>{productName}</b>
          </p>
        </div>
        <div className="row">
          <p>${price}</p>
        </div>
        <div className="row">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="input-group-text"
                onClick={() => removeFromCart(id)}
              >
                -
              </button>
            </div>
            <input
              type="text"
              className="form-control text-center"
              aria-label="Counts"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <div className="input-group-append">
              <button
                className="input-group-text"
                onClick={() => addToCart(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

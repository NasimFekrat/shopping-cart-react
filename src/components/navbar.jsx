import React, { useContext } from "react";
import { ShoppingCart, Storefront } from "phosphor-react";
import { ShopContext } from "../context/shop-context";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  // Calculate the number of items in the cart
  const cartItemsCount = Object.keys(cartItems)
    .filter((key) => !isNaN(key) && cartItems[key] > 0) // Filter out non-numeric keys and only consider positive quantities
    .reduce((total, key) => total + cartItems[key], 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler mx-4"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-4" id="navbarText">
        <a
          className="navbar-brand"
          href={process.env.PUBLIC_URL + "/"}
          style={{ color: "white" }}
        >
          <Storefront size={32} />
        </a>
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href={process.env.PUBLIC_URL + "/"}>
              Shop
            </a>
          </li>
        </ul>
        <span className="navbar-text" style={{ color: "white" }}>
          <a
            className="nav-link position-relative"
            href={process.env.PUBLIC_URL + "/#/cart"}
            style={{ display: "flex", alignItems: "center" }}
          >
            <ShoppingCart size={32} />
            {cartItemsCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                {cartItemsCount}
              </span>
            )}
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

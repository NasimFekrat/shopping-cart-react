import React, { Component } from "react";
import { ShoppingCart, Storefront } from "phosphor-react";

const Navbar = () => {
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
        <a className="navbar-brand" href="/" style={{ color: "white" }}>
          <Storefront size={32} />
        </a>
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Shop
            </a>
          </li>
        </ul>
        <span className="navbar-text" href="/cart" style={{ color: "white" }}>
          <a className="nav-link" href="/cart">
            <ShoppingCart size={32} />
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { Component } from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";

class Shop extends Component {
  render() {
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <p className="h1 m-4">Nasim Shop</p>
          </div>
        </div>
        <div className="row">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default Shop;

import React from "react";
import { products } from "../Api";
import ProductCard from "./components/ProductCard";
import ProductFilter from "./components/ProductFilter";
import "./Product.scss";

function Product() {
  return (
    <div className="products">
      <div className="row">
        <ProductFilter />
        <div className="products__container">
          {products.length > 0 &&
            products.map((product, index) => (
              <ProductCard product={product} border={true} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Product;

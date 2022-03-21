import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

function ProductCard({ product, isSlider }) {
  return (
    <Link to="/product/detail" className="product__item" style={{width: isSlider && "25rem"}}>
      <img className="product__img" src={product.avatar} />
      <p className="product__name">{product.title}</p>
      <p className="product__price">฿ {product.pricing.price}</p>
      <span className="product__status-tag">New</span>
    </Link>
  );
}

export default ProductCard;

import React from "react";
import { products } from "../../Api";
import ProductCard from "./ProductCard";
import "./NewProducts.scss";

// React-slick
function NewProducts() {
  const slideLeft = () => {
    let slider = document.querySelector(".product__box");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    let slider = document.querySelector(".product__box");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div className="product">
      <h1 className="product__header">สินค้าใหม่</h1>
      <div className="product__slider">
        <div className="arrow-icon__box arrow-icon__box--back" onClick={slideRight}>
          <ion-icon class="arrow-icon arrow-icon--back" name="chevron-back-outline"></ion-icon>
        </div>
        <div className="product__box">
          {products.length > 0 &&
            products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
        </div>
        <div className="arrow-icon__box arrow-icon__box--forward" onClick={slideLeft}>
          <ion-icon
            class="arrow-icon arrow-icon--forward"
            name="chevron-forward-outline"
          ></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default NewProducts;

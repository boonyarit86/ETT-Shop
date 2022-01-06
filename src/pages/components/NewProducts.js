import React from "react";
import styled from "styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { products } from "../../Api";

import "./Slider.css"
import ProductCard from "./ProductCard";

// React-slick
function NewProducts() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <Container>
      <Content>
        <h3>New Product</h3>
        <div className="main-slider-container">
          <MdChevronLeft
            size={40}
            className="slider-icon left"
            onClick={slideLeft}
          />
          <div id="slider">
            { products.length > 0 && products.map((product, index) => (
              <React.Fragment key={index}>
                <ProductCard product={product} />
              </React.Fragment>
            ))}
          </div>
          <MdChevronRight
            size={40}
            className="slider-icon right"
            onClick={slideRight}
          />
        </div>
      </Content>
    </Container>
  );
}

export default NewProducts;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1128px;
  padding: 10px;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 10px;
  h3 {
    margin: 10px 0;
  }
`;



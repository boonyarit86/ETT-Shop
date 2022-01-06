import React from "react";
import styled from "styled-components";

function ProductCard({ product }) {
  return (
    <Container>
      <Product>
        <ProductImage>
          <div>
            <a href="#">
              <img src={product.avatar} alt="" />
            </a>
            <div
              className="tagstatus"
              style={{ display: product.isNew ? "block" : "none" }}
            >
              NEW
            </div>
          </div>
        </ProductImage>
        <ProductTilte>
          <a href="#"><span>{product.title}</span></a>
        </ProductTilte>
        <ProductPrice>
          <span>{product.pricing.price}</span>
        </ProductPrice>
      </Product>
    </Container>
  );
}

export default ProductCard;

const Container = styled.div`
  display: inline-block;
`;

const Product = styled.div`
  max-width: 180px;
  height: 300px;
  padding: 14px 14px 7px;
  position: relative;
  /* border: 1px solid #ccc; */
`;

const ProductImage = styled.div`
  /* border: 1px solid #000; */
  div {
    width: 120px;
    height: 150px;
    position: relative;
    margin: 0 auto;

    img {
      /* border: 1px solid green; */
      width: 100%;
      height: 100%;
      background-position: 0 100%;
      background-repeat: no-repeat;
      background-size: 100% 200px;
    }

    div.tagstatus {
      /* content: "NEW"; */
      position: absolute;
      font-size: 10px;
      border-radius: 50%;
      background-color: rgba(255, 171, 0, 0.95);
      width: 4em;
      height: 4em;
      text-align: center;
      vertical-align: middle;
      line-height: 4em;
      color: #fff;
      font-weight: 700;
      transform: rotate(-18deg);
      top: 0px;
      left: -20px;
      text-shadow: 0 1px 1px rgb(0 0 0 / 40%);
      letter-spacing: 0.08em;
    }
  }
`;

const ProductTilte = styled.div`
  display: inline-block;
  margin-top: 10px;
  width: 120px;
  word-wrap: break-word;

  span {
    font-weight: 400;
    color: #333;
  }
`;

const ProductPrice = styled.div`
  position: absolute;
  bottom: 10px;
  left: 14px;
  width: 100px;
  span {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    padding: 2px 4px;
    border-radius: 4px;
    background: linear-gradient(45deg, #ff6922, #ef5e24);
  }
`;

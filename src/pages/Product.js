import React from "react";
import styled from "styled-components";
import { products } from "../Api";
import ProductCard from "./components/ProductCard";
import ProductFilter from "./components/ProductFilter";

function Product() {
  return (
    <Container>
      <ProductContainer>
        <ProductFilter />
        <ProductWrap>
          {products.length > 0 &&
            products.map((product, index) => (
              <React.Fragment key={index}>
                <ProductCard product={product} border={true} />
              </React.Fragment>
            ))}
        </ProductWrap>
      </ProductContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  /* border: 2px solid blue; */
`;

const ProductContainer = styled.div`
  margin: 80px auto;
  max-width: 1128px;
  padding: 10px;
  .selector:first-child {
    margin: 10px;

    @media(max-width: 500px) {
      width: 100%;
      padding: 0 10px;
      margin: 10px 0;
    }
  }
  /* border: 1px solid orange; */

  @media(max-width: 600px) {
    padding: 10px 0;
  }
`;

const ProductWrap = styled.div`
  /* display: flex;
  align-items: center;
  flex-wrap: wrap; */

  display: grid;
  grid-template-columns: auto auto auto auto auto;

  @media(max-width: 1000px) {
    grid-template-columns: auto auto auto auto;
  }

  @media(max-width: 800px) {
    grid-template-columns: auto auto auto;
  }

  @media(max-width: 600px) {
    grid-template-columns: auto auto;
  }

  /* border: 2px solid pink; */
`;

export default Product;

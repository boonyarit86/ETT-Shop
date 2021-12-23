import React from "react";
import styled from "styled-components";

function NewsModal({ data, setOpenModal, setData }) {

    console.log(data)


  return (
    <Container>
      <Header>
        <img 
        src="./images/close-icon.svg" 
        alt="" 
        onClick={() => {
            setOpenModal(false);
            setData({});
        }}
        />
      </Header>
      {data.newsType === "Shop" && (
      <Content>
          <h2>{data.product.productName}</h2>
          <p>{data.description}</p>
          <a href={data.product.productUrl}>
            <img src={data.product.productImage} alt="" />
          </a>
      </Content>
      )}
      {data.newsType === "Promotion" && (
      <Content>
          <a href="#">
            <img src={data.adImage} alt="" />
          </a>
      </Content>
      )}
    </Container>
  );
}

export default NewsModal;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;
  height: auto;

  @media(max-width: 500px) {
      width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  img {
    width: 28px;
    height: 28px;
  }
  justify-content: flex-end;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    p {
        padding: 10px;
        text-align: center;
    }

    a {
        width: 100%;
        margin-top: 10px;
        overflow: hidden;
    }

    a > img{
        width: 100%;
        height: 350px;
        object-fit: "contain";
        background-position: center;
        background-repeat: no-repeat;
    }
`;

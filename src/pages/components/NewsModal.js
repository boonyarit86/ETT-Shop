import React from "react";
import styled from "styled-components";
import "./NewsModal.scss";

function NewsModal({ data, onClick }) {
  return (
    <div className="news-modal news-modal--close">
      <ion-icon class="news-modal__close-icon" name="close-outline" onClick={onClick}></ion-icon>
      {data.newsType === "Shop" && (
        <div className="news-modal__box">
          <h2 className="news-modal__title">{data.product.productName}</h2>
          <p className="news-modal__description">{data.description}</p>
          <a className="news-modal__img-link" href={data.product.productUrl}>
            <img
              className="news-modal__img"
              src={data.product.productImage}
              alt="news image"
            />
          </a>
        </div>
      )}
      {data.newsType === "Promotion" && (
        <div className="news-modal__box">
          <a href="#" className="news-modal__img-link">
            <img className="news-modal__img" src={data.adImage} alt="news image" />
          </a>
        </div>
      )}
    </div>
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
  z-index: 999;

  @media (max-width: 500px) {
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

  a > img {
    width: 100%;
    height: 350px;
    object-fit: "contain";
    background-position: center;
    background-repeat: no-repeat;
  }
`;

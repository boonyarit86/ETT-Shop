import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <img className="hero__img" src="./images/hero.jpg" alt="hero" />
      <div className="hero__info">
          <h1 className="hero__heading">
              ค้นหาอุปกรณ์อิเล็กทรอนิกส์ต่างๆได้ที่นี่
          </h1>
        <p className="hero__text">
          บริษัทของเรารับผลิตและวิจัยไมโครอิเล็กทรอนิกส์และระบบควบคุมอัตโนมัติเพื่อตอบโจทย์ความต้องการของคุณ.
        </p>
        <Link to="/product" className="btn btn--secondary">สินค้าของเรา</Link>
      </div>
    </div>
  );
}

export default Hero;

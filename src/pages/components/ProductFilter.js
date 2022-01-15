import React from "react";

import "./ProductFilter.css";

function ProductFilter() {

  const openOptions = () => {
    let optionsUl = document.getElementById("options");
    let arrowIcon = document.getElementById("arrow");
    optionsUl.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };


  const selectOption = (text) => {
    let optionsUl = document.getElementById("options");
    let arrowIcon = document.getElementById("arrow");
    let productType = document.getElementById("textType");
    arrowIcon.classList.toggle("rotate");
    optionsUl.classList.toggle("hide");
    productType.innerHTML = this.textContent;
  }



  return (
    <div className="selector">
      <div className="selectField" onClick={openOptions}>
        <div className="textWrap">
          <p className="textTitle">ชนิดสินค้า: </p>
          <p id="textType">ทั้งหมด</p>
        </div>
        <img src="./images/arrow.png" id="arrow" />
      </div>

      <ul id="options" className="hide">
        <li className="option" onClick={() => selectOption("")}>
          <p>SMD</p>
        </li>
        <li className="option" onClick={() => selectOption("")}>
          <p>Robot</p>
        </li>
        <li className="option" onClick={() => selectOption("")}>
          <p>Module</p>
        </li>
      </ul>
    </div>
  );
}

export default ProductFilter;

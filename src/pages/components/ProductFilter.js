import React from "react";

import "./ProductFilter.scss";

function ProductFilter() {
  const openOptions = () => {
    let optionsUl = document.getElementById("options");
    let arrowIcon = document.getElementById("option-arrow");
    optionsUl.classList.toggle("options--hide");
    arrowIcon.classList.toggle("option-arrow--rotate");
  };

  const selectOption = (text) => {
    let optionsUl = document.getElementById("options");
    let arrowIcon = document.getElementById("option-arrow");
    let productType = document.querySelector(".selector__value");
    arrowIcon.classList.toggle("option-arrow--rotate");
    optionsUl.classList.toggle("options--hide");
    // productType.innerHTML = this.textContent;
    productType.innerHTML = text;
  };

  return (
    <div className="selector">
      <div className="selector__field" onClick={openOptions}>
        <div className="selector__text-wrap">
          <span className="selector__title">ชนิดสินค้า: </span>
          <span className="selector__value">ทั้งหมด</span>
        </div>
        <ion-icon name="chevron-down-outline" id="option-arrow"></ion-icon>
      </div>

      <ul id="options" className="options--hide">
        <li className="option" onClick={() => selectOption("SMD")}>
          <p>SMD</p>
        </li>
        <li className="option" onClick={() => selectOption("Robot")}>
          <p>Robot</p>
        </li>
        <li className="option" onClick={() => selectOption("Module")}>
          <p>Module</p>
        </li>
      </ul>
    </div>
  );
}

export default ProductFilter;

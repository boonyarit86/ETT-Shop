import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./NavigationSlide.css";

// ***  Slider.css *** //
// this file is also used for NewProducts.js
// Style left-arrow and right-arrow icon
import "./Slider.css";
// ***             *** //

function NavigationSlide() {
  // 4
  const [maxImageNumber] = useState(3 - 1);
  const [count, SetCount] = useState(0);
  const [images] = useState([
    "https://c4.wallpaperflare.com/wallpaper/13/457/274/anime-re-zero-starting-life-in-another-world-emilia-re-zero-re-zero-starting-life-in-another-world-ova-memory-snow-wallpaper-preview.jpg",
    "https://images8.alphacoders.com/691/thumb-1920-691314.png",
    "https://wallpaperaccess.com/full/1132981.png",
  ]);

  useEffect(() => {
    let arrowLeft = document.getElementById("arrow-left");
    arrowLeft.classList.add("action-arrow");
  }, []);

  const slideLeft = () => {
    let img = document.getElementById("NavigationSlide-img");
    let arrowLeft = document.getElementById("arrow-left");
    let arrowRight = document.getElementById("arrow-right");
    if (count !== 0) {
      let sum = count === 0 ? count : count - 1;
      if (sum === 0) arrowLeft.classList.add("action-arrow");
      img.src = `${images[sum]}`;
      arrowRight.classList.remove("action-arrow");
      SetCount(sum);
    }
  };

  const slideRight = () => {
    let img = document.getElementById("NavigationSlide-img");
    let arrowLeft = document.getElementById("arrow-left");
    let arrowRight = document.getElementById("arrow-right");
    if (count !== maxImageNumber) {
      let sum = count + 1;
      if (sum === maxImageNumber) arrowRight.classList.add("action-arrow");
      img.src = `${images[sum]}`;
      arrowLeft.classList.remove("action-arrow");
      SetCount(sum);
    }
  };

  return (
    <div className="NavigationSlide-container" id={count}>
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        id="arrow-left"
        onClick={slideLeft}
      />
      <div className="NavigationSlide-slide">
        <img
          id="NavigationSlide-img"
          src="https://c4.wallpaperflare.com/wallpaper/13/457/274/anime-re-zero-starting-life-in-another-world-emilia-re-zero-re-zero-starting-life-in-another-world-ova-memory-snow-wallpaper-preview.jpg"
        />
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        id="arrow-right"
        onClick={slideRight}
      />
    </div>
  );
}

export default NavigationSlide;

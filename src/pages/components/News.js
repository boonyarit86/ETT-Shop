import React, { useState } from "react";
import Backdrop from "../../shared/UIElements/Backdrop";
import NewsModal from "./NewsModal";

import "./News.scss";

function News() {
  const [data, setData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (item) => {
    let news_modalEl = document.querySelector(".news-modal");
    if (item.newsType !== "UPDATE") {
      setData(item);
      setOpenModal(prev => !prev);
      news_modalEl.classList.remove("news-modal--close");
      news_modalEl.classList.add("news-modal--open");
    }

  };

  const handleCloseModal = () => {
    let news_modalEl = document.querySelector(".news-modal");
    
    news_modalEl.classList.remove("news-modal--open");
    news_modalEl.classList.add("news-modal--close");
    setOpenModal(prev => !prev);
    setData({});
  };

  return (
    <React.Fragment>
      <div className="news">
        <h1 className="news__header">ข่าวสาร</h1>
        <div className="news__box">
          {news.length > 0 &&
            news.map((item, index) => (
              <div
                className="news__item"
                onClick={() => handleModal(item)}
                key={index}
                style={{cursor: item.newsType !== 'UPDATE' ? 'pointer' : 'initial'}}
              >
                <div className="news__item-tags">
                  <div className="news__item-status">
                    <p>{item.newsType}</p>
                  </div>
                  <div className="news__item-date">
                    <p>{item.date}</p>
                  </div>
                </div>
                <p className="news__item-detail">{item.description}</p>
              </div>
            ))}
        </div>
      </div>

      <NewsModal data={data} onClick={handleCloseModal} />
      {openModal && <Backdrop onClick={handleCloseModal} mobile />}
    </React.Fragment>
  );
}

export default News;

let news = [
  {
    title: "Changed regular hours from Monday to Saturday to Monday to Friday",
    description: "Open 09:00 a.m. to 05:00 p.m.",
    newsType: "UPDATE",
    date: "2021/12/17",
    exp: "2021/12/25",
  },
  {
    title: "ETT-ARDUINO's new version",
    description:
      "Available in our shop now, its price is only $12 (Not include taxs).",
    newsType: "Shop",
    date: "2021/12/17",
    exp: "2021/12/25",
    product: {
      productName: "ARDUINO V.2",
      description: "Battery can last 7 hours.",
      productImage: "https://o.lnwfile.com/pag2f9.jpg",
      productUrl: "",
    },
  },
  {
    title: "An annual sales",
    description:
      "Spend your money with our products over $100, You will given 15% discounts.",
    newsType: "Promotion",
    date: "2021/12/17",
    exp: "2021/12/25",
    adImage: "https://o.lnwfile.com/pag2f9.jpg",
  },
];

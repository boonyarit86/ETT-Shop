import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../UIElements/Backdrop";
import "./Header.scss";

function Header() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      let width = window.innerWidth;
      if (width <= 758) {
        setOpenSearch(false);
      }
      if (width > 758) {
        setOpenMenuMobile(false);
      }
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);

  const onClickSearchInput = () => {
    setOpenSearch((prev) => !prev);
  };

  return (
    <div
      className="header"
      style={{ backgroundColor: openSearch ? "#1a2e44" : "#fff" }}
    >
      <div className="row">
        <div className="header__content">
          {!openSearch && (
            <React.Fragment>
              <Link to="/" className="header__logo-box">
                <img
                  src="/images/ett-logo.png"
                  className="header__logo-img"
                  alt="ett-logo"
                />
              </Link>
              <div className="header__menu">
                <ul className="header__list">
                  <li className="header__item">
                    <Link to="/">หน้าแรก</Link>
                  </li>
                  <li className="header__item">
                    <Link to="/product">สินค้า</Link>
                  </li>
                  <li className="header__item">
                    <a href="#" alt="">
                      บทความ
                    </a>
                  </li>
                  <li className="header__item">
                    <Link to="/contact">ติดต่อ</Link>
                  </li>
                </ul>
              </div>
              <ion-icon
                class="header__search-icon"
                name="search-outline"
                onClick={onClickSearchInput}
              ></ion-icon>
            </React.Fragment>
          )}
          {openSearch && (
            <div className="header__search-input-box">
              <div className="header__search-input-item">
                <ion-icon
                  class="header__search-input-icon"
                  name="arrow-back-outline"
                  onClick={onClickSearchInput}
                ></ion-icon>
                <input
                  type="text"
                  name="search"
                  className="header__search-input"
                />
              </div>
            </div>
          )}
        </div>
        {openSearch && <Backdrop onClick={onClickSearchInput} />}
      </div>
    </div>
  );
}

export default Header;

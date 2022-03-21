import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../UIElements/Backdrop";
import "./Header.scss";


function Header() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const onClickSearchInput = () => {
    let header_searchEl = document.querySelector(".header__search-input-box");
    
    if(!openSearch) {
      header_searchEl.classList.remove("header__search-input-box--close");
      header_searchEl.classList.add("header__search-input-box--open");
    } else {
      header_searchEl.classList.remove("header__search-input-box--open");
      header_searchEl.classList.add("header__search-input-box--close");
    }
    setOpenSearch((prev) => !prev);
  };

  const onClickMenuMobile = () => {
    let mobile__menuEl = document.querySelector(".mobile-menu");
    if (!openMenuMobile) {
      mobile__menuEl.classList.remove("mobile-menu--close");
      mobile__menuEl.classList.add("mobile-menu--open");
    } else {
      mobile__menuEl.classList.remove("mobile-menu--open");
      mobile__menuEl.classList.add("mobile-menu--close");
    }
    setOpenMenuMobile((prev) => !prev);
  };

  return (
    <React.Fragment>
      <div className="header">
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
                      <a href="http://www.ett.co.th/article/article.html">
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
            
              <div className="header__search-input-box header__search-input-box--close">
                <div className="header__search-input-item ">
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
            
          </div>
        </div>
      </div>

      {/* Mobie Menu */}
      <div className="mobile-menu mobile-menu--close">
        <div className="mobile-menu__header">
          <ion-icon
            class="mobile-menu__close-icon"
            name="close-outline"
            onClick={onClickMenuMobile}
          ></ion-icon>
          <Link to="/" className="mobile-menu__logo-box" onClick={onClickMenuMobile}>
            <img
              src="/images/ett-logo.png"
              className="mobile-menu__logo-img"
              alt="ett-logo"
            />
          </Link>
        </div>
        <ul className="mobile-menu__list">
          <li className="mobile-menu__item">
            <Link to="/" className="mobile-menu__link" onClick={onClickMenuMobile}>
              <ion-icon
                class="mobile-menu__link-icon"
                name="home-outline"
              ></ion-icon>
              <p>หน้าแรก</p>
            </Link>
          </li>
          <li className="mobile-menu__item">
            <Link to="/product" className="mobile-menu__link" onClick={onClickMenuMobile}>
              <ion-icon
                class="mobile-menu__link-icon"
                name="bag-handle-outline"
              ></ion-icon>
              <p>สินค้า</p>
            </Link>
          </li>
          <li className="mobile-menu__item">
            <Link to="#" className="mobile-menu__link" onClick={onClickMenuMobile}>
              <ion-icon
                class="mobile-menu__link-icon"
                name="reader-outline"
              ></ion-icon>
              <p>บทความ</p>
            </Link>
          </li>
          <li className="mobile-menu__item">
            <Link to="/contact" className="mobile-menu__link" onClick={onClickMenuMobile}>
              <ion-icon
                class="mobile-menu__link-icon"
                name="call-outline"
              ></ion-icon>
              <p>ติดต่อ</p>
            </Link>
          </li>
        </ul>
      </div>

      {!openSearch && (
        <ion-icon
          class={`menu-mobile-icon ${openMenuMobile && "menu-mobile--close"}`}
          name={"menu-outline"}
          onClick={onClickMenuMobile}
        ></ion-icon>
      )}
      {openSearch && <Backdrop onClick={onClickSearchInput} />}
      {openMenuMobile && <Backdrop onClick={onClickMenuMobile} mobile />}
    </React.Fragment>
  );
}

export default Header;

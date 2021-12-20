import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Backdrop from "../UIElements/Backdrop";

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

  return (
    <>
      <Container>
        <Content className={openSearch ? "openSearchInput" : ""}>
          <Logo>
            <img src="/images/Ett-logo.png" />
          </Logo>
          <Nav>
            <NavListWrap>
              <NavList>
                <a href="#" alt="">
                  Home
                </a>
              </NavList>
              <NavList>
                <a href="#" alt="">
                  Product
                </a>
              </NavList>
              <NavList>
                <a href="#" alt="">
                  Article
                </a>
              </NavList>
              <NavList>
                <a href="#" alt="">
                  Contact
                </a>
              </NavList>
            </NavListWrap>
          </Nav>
          <SearchIcon onClick={(e) => setOpenSearch(!openSearch)}>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
          <MenuIcon onClick={(e) => setOpenMenuMobile(!openMenuMobile)}>
            <img
              src={`/images/${
                !openMenuMobile ? "hamburgur" : "close"
              }-icon.svg`}
              alt=""
            />
          </MenuIcon>
          <SearchInput style={{ display: openSearch ? "flex" : "none" }}>
            <div>
              <img src="/images/search-icon--black.svg" alt="" />
              <input />
            </div>
          </SearchInput>
        </Content>
        <MobileContent
          className={openMenuMobile ? "openMobileMenu" : "closeMobileMenu"}
        >
          <SearchInputMobile>
            <div>
              <img src="/images/search-icon--black.svg" alt="" />
              <input />
            </div>
          </SearchInputMobile>
          <hr />
          <NavListWrapMobile>
            <NavListMobile>
              <a href="#" alt="">
                Home
              </a>
            </NavListMobile>
            <NavListMobile>
              <a href="#" alt="">
                Product
              </a>
            </NavListMobile>
            <NavListMobile>
              <a href="#" alt="">
                Article
              </a>
            </NavListMobile>
            <NavListMobile>
              <a href="#" alt="">
                Contact
              </a>
            </NavListMobile>
          </NavListWrapMobile>
        </MobileContent>
      </Container>
      {openMenuMobile && (
        <Backdrop backdrop={openMenuMobile} setBackdrop={setOpenMenuMobile} />
      )}
      {openSearch && (
        <Backdrop backdrop={openSearch} setBackdrop={setOpenSearch} />
      )}
    </>
  );
}

export default Header;

const Logo = styled.div`
  img {
    width: 48px;
    height: 48px;
  }
`;

const Nav = styled.div`
  display: block;
  flex-grow: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  img {
    width: 28px;
    height: 28px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #002ead;
  position: fixed;
  left: 0;
  top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 9999;
  .openMobileMenu {
    display: block;
    height: 70vh;
    animation: slideDown 0.3s;
  }
  .closeMobileMenu {
    animation: slideUp 0.3s;
    /* display: none; */
    height: 0vh;
  }
  .openSearchInput {
    ${Logo}, ${SearchIcon}, ${Nav} {
      display: none;
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  max-width: 1128px;
  padding: 10px;
  margin: 0 auto;
  position: relative;
  /* background-color: #002ead; */
`;

const NavListWrap = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 20px;
  flex-wrap: nowrap;
`;

const NavList = styled.li`
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  min-width: 80px;
  a {
    color: #fff;
    opacity: 0.9;
    transition: ease-in 0.1s;
  }

  a:hover {
    opacity: 1;
  }
`;

const MenuIcon = styled.div`
  display: none;
  img {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

const MobileContent = styled.div`
  position: absolute;
  top: 73px;
  width: 100%;
  /* background: #000; */
  background-color: #002ead;
  color: #fff;
  display: none;

  hr {
    margin-top: 20px;
  }
`;

const SearchInput = styled.div`
  /* height: 72px; */
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  div {
    width: 60%;
    height: 35px;
    background: #fff;
    display: flex;
    align-items: center;
    border-radius: 5px;

    input {
      border-radius: 5px;
      border: none;
      background: transparent;
      width: 90%;
      height: 90%;
      margin-left: 10px;
      outline: none;
    }

    img {
      width: 28px;
      height: 28px;
      margin-left: 5px;
    }
  }
`;

const NavListWrapMobile = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  flex-wrap: nowrap;
`;

const NavListMobile = styled.li`
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  padding: 20px 0;
  border-bottom: 1px solid #fff;
  a {
    color: #fff;
    opacity: 0.9;
    transition: ease-in 0.1s;
  }

  a:hover {
    opacity: 1;
  }
`;

const SearchInputMobile = styled(SearchInput)`
  div {
    width: 80%;
  }
`;

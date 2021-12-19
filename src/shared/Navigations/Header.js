import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Header() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      let width = window.innerWidth;
      if(width <= 758) {
        setOpenSearch(false);
      }
    })
    return () => window.removeEventListener("resize")
  }, [])

  return (
    <Container>
      <Content className={openSearch ? "openSearchInput" : ""} >
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
        <SearchIcon
          onClick={(e) => setOpenSearch(!openSearch)}
        >
          <img src="/images/search-icon.svg" alt="" />
        </SearchIcon>
        <HamburgurIcon onClick={(e) => setOpenMenuMobile(!openMenuMobile)}>
          <img src="/images/hamburgur-icon.svg" alt="" />
        </HamburgurIcon>
        <SearchInput 
        style={{ display: openSearch ? "flex" : "none" }}
        >
          <div>
            <img src="/images/search-icon--black.svg" alt="" />
            <input />
          </div>
        </SearchInput>
      </Content>
      <MobileContent className={openMenuMobile ? "active" : null}>
        Hi {openMenuMobile ? "true" : "false"}
      </MobileContent>
    </Container>
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
    display: none;;
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
  .active {
    display: block;
    opacity: 1;
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
  }
`;

const HamburgurIcon = styled.div`
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
  height: 70vh;
  background: #000;
  color: #fff;
  display: none;
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

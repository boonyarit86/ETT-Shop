import React, { useState } from "react";
import styled from "styled-components";

function Header() {

    const [openMenuMobile, setOpenMenuMobile] = useState(false);

  return (
    <Container>
      <Content>
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
        <SearchIcon>
          <img src="/images/search-icon.svg" alt="" />
        </SearchIcon>
        <HamburgurIcon onClick={(e) => setOpenMenuMobile(!openMenuMobile)}>
          <img src="/images/hamburgur-icon.svg" alt="" />
        </HamburgurIcon>
      </Content>
      <MobileContent className={openMenuMobile ? "active": ""}>
        Hi
      </MobileContent>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  background-color: #002ead;
  position: fixed;
  left: 0;
  top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
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

const Logo = styled.div`
  img {
    width: 48px;
    height: 48px;
  }
`;

const Nav = styled.div`
  display: block;
  flex-grow: 1;
  @media(max-width: 768px) {
        display: none;
    }
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

const SearchIcon = styled.div`
    img {
        width: 28px;
        height: 28px;
    }
    @media(max-width: 768px) {
        display: none;
    }
`;

const HamburgurIcon = styled.div`
    display: none;
    img {
        width: 28px;
        height: 28px;
    }

    @media(max-width: 768px) {
        display: block;
        margin-left: auto;
    }
`;

const MobileContent = styled.div`
    position: absolute;
    top: 80px;
    width: 100%;
    height: 90%;
    background: #000;
    opacity: 0.8;

    &:active {
        display: block;
        opacity: 1;
    }
`;

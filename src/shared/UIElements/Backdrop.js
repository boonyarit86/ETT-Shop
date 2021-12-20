import React from "react";
import styled from "styled-components";

function Backdrop({ backdrop, setBackdrop }) {
  return <Container onClick={() => setBackdrop(!backdrop)} />;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ccc;
  opacity: 0.8;
  z-index: 99;
`;

export default Backdrop;

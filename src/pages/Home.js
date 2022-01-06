import React from "react";
import styled from "styled-components";
import NewProducts from "./components/NewProducts";
import News from "./components/News";

function Home () {

    return (
        <Container>
            <News />
            <NewProducts />
        </Container>
    )
}

const Container = styled.div`
  margin: 80px 0 80px 0;
`;

export default Home;
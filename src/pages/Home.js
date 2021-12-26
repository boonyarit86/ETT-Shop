import React from "react";
import styled from "styled-components";
import News from "./components/News";

function Home () {

    return (
        <Container>
            <News />
        </Container>
    )
}

const Container = styled.div`
  margin: 80px 0 80px 0;

`

export default Home;
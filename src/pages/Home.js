import React from "react";
import styled from "styled-components";
import NewProducts from "./components/NewProducts";
import News from "./components/News";

function Home () {

    return (
        <div className="row">
            <News />
            <NewProducts />
        </div>
    )
}


export default Home;
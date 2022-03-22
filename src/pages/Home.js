import React from "react";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import News from "./components/News";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <div className="row">
        <News />
        <NewProducts />
      </div>
    </React.Fragment>
  );
}

export default Home;

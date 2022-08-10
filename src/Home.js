import React from "react";
import { useRef } from "react";
import "./Home.css";
import Product from "./Product";
import ReactDOM from "react-dom";
import { Stocks } from "./Stocks.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__background-img"
          src="https://assets.aboutamazon.com/dims4/default/ce44922/2147483647/strip/true/crop/1600x900+0+350/resize/1200x675!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F7a%2F3d%2Ff26e5a8b44e7affcdfd5a245a95b%2Fsquid-orange-logo.jpg"
        />
        <Stocks />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import { stockData as data } from "./static/MOCK_DATA.js";
import Product from "./Product.js";

export const Stocks = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        {data.map((data, key) => {
          return (
            <div key={key}>
              {
                <Product
                  title={data.title}
                  price={data.price}
                  image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
                  rating={data.rating}
                />
              }
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

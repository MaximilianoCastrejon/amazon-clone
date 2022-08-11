import React from "react";
import "./Home.css";
import { stockData as data } from "./static/MOCK_DATA.js";
import Product from "./Product.js";

// import { Image } from "@shopify/shopify-api/dist/rest-resources/2022-07/index.js";

// const test_session = await Shopify.Utils.loadCurrentSession(request, response);

// await Image.find({
//   session: test_session,
//   product_id: 632910392,
//   id: 850703190,
// });

export const Stocks = () => {
  console.log(data);
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
                  image={data.img}
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

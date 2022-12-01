import React from "react";
import "../static/styles/Home.css";
import { stockData as data } from "../static/MOCK_DATA.js";
import Product from "./Product.js";

// import { Image } from "@shopify/shopify-api/dist/rest-resources/2022-07/index.js";

// const test_session = await Shopify.Utils.loadCurrentSession(request, response);

// await Image.find({
//   session: test_session,
//   product_id: 632910392,
//   id: 850703190,
// });

export const Stocks = (props) => {
  const { onAdd } = props;
  return (
    <React.Fragment>
      <div className="wrapper">
        {data.map((product, key) => {
          return (
            <div key={key}>
              {
                <Product
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.img}
                  rating={product.rating}
                  onAdd={onAdd}
                  product={product}
                />
              }
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

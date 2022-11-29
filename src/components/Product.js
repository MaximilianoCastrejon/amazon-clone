import React from "react";
import "../static/styles/Product.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../utils/StateProvider";

function Product({ id, title, price, rating, image, onAdd, product }) {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    // inside dispatch is the action (action creation)
    dispatch({
      type: "ADD_TO_BASKET",
      providerItem: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div key={id} className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="product__star"></StarIcon>
            ))}
          {Array(5 - rating)
            .fill()
            .map((_, i) => (
              <StarBorderIcon
                key={i}
                className="product__star-border"
              ></StarBorderIcon>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button
        onClick={() => {
          onAdd(product);
          addToBasket();
        }}
      >
        Add to basket
      </button>
    </div>
  );
}

export default Product;

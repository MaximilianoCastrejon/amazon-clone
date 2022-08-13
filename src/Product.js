import React from "react";
import "./Product.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

function Product({ id, title, price, rating, image, onAdd, product }) {
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
              <StarIcon className="product__star"></StarIcon>
            ))}
          {Array(5 - rating)
            .fill()
            .map((_, i) => (
              <StarBorderIcon className="product__star-border"></StarBorderIcon>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={() => onAdd(product)}>Add to basket</button>
    </div>
  );
}

export default Product;

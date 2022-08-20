import React from "react";
import "./CheckoutProduct.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hideButton,
  itemsOfProductRemoved,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const removeProduct = () => {
    dispatch({
      type: "REMOVE_PRODUCT",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
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
        {/* Make a function to delete everything from cartItems i.e. the useState hook */}
        {!hideButton && (
          <button
            onClick={() => {
              removeProduct();
              itemsOfProductRemoved(id);
            }}
          >
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;

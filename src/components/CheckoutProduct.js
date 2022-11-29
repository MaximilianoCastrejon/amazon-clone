import React from "react";
import "../static/styles/CheckoutProduct.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../utils/StateProvider";
import { useState } from "react";

function CheckoutProduct(props) {
  const { id, image, title, price, rating, hideButton, itemsOfProductRemoved } =
    props;
  const [{ basket }, dispatch] = useStateValue();
  const [isFadingOut, setIsFadingOut] = useState(false);

  const removeFromBasket = () => {
    // remove one item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  // HANDLE FADEOUT OF REMOVED ITEM
  const fadeOut = () => {
    setIsFadingOut(true);
  };
  const handleRemoveItem = () => {
    setIsFadingOut(false);
  };

  // REMOVING ALL ITEMS OF THE PRODUCT
  var FADE_TIMEOUT = 1000;
  const removeProduct = () => {
    // var productCard = document.getElementsByClassName("checkoutProduct");
    // var seconds = FADE_TIMEOUT / 1000;
    // productCard.style.transition = "opacity " + seconds + "s ease";

    // productCard.style.opacity = 0;
    setTimeout(
      () =>
        dispatch({
          type: "REMOVE_PRODUCT",
          id: id,
        }),
      FADE_TIMEOUT
    );
  };

  return (
    <div
      className={"checkoutProduct " + (isFadingOut ? "item-fadeout" : "item")}
    >
      <img alt="product" className="checkoutProduct__image" src={image} />

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
            onClick={(event) => {
              removeProduct();
              fadeOut(setTimeout(() => handleRemoveItem(), FADE_TIMEOUT));
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

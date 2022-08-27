import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout(props) {
  const { cartItems, onAdd, onRemove, itemsOfProductRemoved } = props;
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(user);
  // Creating variable without duplicates. Doesn't update with change in data
  // const uniqueBasketItems = basket?.filter(
  //   (item, index, self) =>
  //     index ===
  //     self.findIndex(
  //       (t) =>
  //         t.id === item.id &&
  //         (t.title === item.title,
  //         t.image === item.image,
  //         t.price === item.price,
  //         t.rating === item.rating)
  //     )
  // );
  const basketDuplicateCheck = [];

  const addToBasket = (item) => {
    // inside dispatch is the action (action creation)
    dispatch({
      type: "ADD_TO_BASKET",
      providerItem: {
        id: item.id,
        title: item.title,
        price: item.price,
        rating: item.rating,
        image: item.img,
      },
    });
  };
  const removeFromBasket = (id) => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/CorpGC/Banner_PC_without_Citi.jpg"
          alt=""
        />
        <div>
          <h5>Hello, {user?.email}</h5>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
        <div className="chechout__product-cards">
          {basket?.map((item, index) => {
            if (basketDuplicateCheck.includes(item.id)) return null;
            basketDuplicateCheck.push(item.id);
            return (
              <>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  itemsOfProductRemoved={itemsOfProductRemoved}
                  cartItems={cartItems}
                />
              </>
            );

            // const exists = uniqueBasketItems.find((x) => x.id === item.id);
            // if (exists) {
            //   return (
            //     <>
            //       <CheckoutProduct
            //         id={item.id}
            //         title={item.title}
            //         image={item.image}
            //         price={item.price}
            //         rating={item.rating}
            //       />
            //     </>
            //   );
            // }
          })}
        </div>
      </div>
      <div className="checkcout__right row">
        <Subtotal
          onAdd={onAdd}
          cartItems={cartItems}
          onRemove={onRemove}
          removeFromBasket={removeFromBasket}
          addToBasket={addToBasket}
        ></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;

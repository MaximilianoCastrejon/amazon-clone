import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/CorpGC/Banner_PC_without_Citi.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkcout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;

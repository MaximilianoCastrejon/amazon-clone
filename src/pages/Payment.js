import React from "react";
import CreditInfo from "../components/CreditInfo";
import OrderSummary from "../components/OrderSummary";
import "../static/styles/Payment.css";

function Payment() {
  return (
    <>
      <div className="payment-container">
        <div className="window">
          <OrderSummary></OrderSummary>
          <CreditInfo></CreditInfo>
        </div>
      </div>
    </>
  );
}

export default Payment;

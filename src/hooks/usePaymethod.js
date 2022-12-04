import React, { useState, useEffect, useCallback } from "react";

function usePaymethod(card, cardImg) {
  const [paymentData, setPaymentdata] = useState({
    cardNumber: 0,
    cardHolder: "",
    expirationDate: 0,
    CVC: 0,
  });

  useEffect(() => {
    //Change innerHTML to current target (already saved in paymentMethod)
    card === "Master Card"
      ? (cardImg.current.src =
          "https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png")
      : card === "American Express"
      ? (cardImg.current.src =
          "https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png")
      : (cardImg.current.src =
          "https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png");
  });

  const handlePaydata = (e) => {
    setPaymentdata((paymentData) => ({
      ...paymentData,
      [e.target.name]: e.target.value,
    }));

    cardValidation();
  };

  const cardValidation = useCallback(() => {}, [paymentData]);

  const processCardInfo = (e) => {
    e.preventDefault();
  };

  return { handlePaydata, processCardInfo };
}

export default usePaymethod;

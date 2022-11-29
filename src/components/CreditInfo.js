import React, { useCallback } from "react";
import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import env from "react-dotenv";

function CreditInfo() {
  //https://www.robinwieruch.de/react-dropdown/
  const creditCarImage = useRef();
  //TODO: create custom hook
  //TODO: make good useEffect
  //TODO: make good useMemo
  //TODO: make good clean up functions on useEffect

  //TODO: save credit info of user
  //TODO: Conect to firebase and hash user data

  /*When to use MEMO:
    One should use memo only when re-rendering the items is slower that the validation
    makes in the background (such as is the case with long lists of infromation) or 
    when making requests to an API, because multiple renders can make multiple fetch 
    request which increases costs of API usage.

    It can also be used when an onChange function call (either changing the state,
    thus triggering any function dependent on that state, or calling directly the 
    function) 

    Nocierto. Por el re-render del componente que noutiliza Memo, se vuelve a realizar
    la función de filtro 

    When passing the property to a component and not memoizing that property, the
    whole component gets re-render because of that one property
  */

  /*useCallback is used when you want the browser to memoize the function to not 
  execute it on each render. The differences with useMemo relies in that useMemo is 
  used to return something and save it in a variable, while useCallback would be used
  to prevent a variable from changing state based on a re-render and it doesn't return
  anything*/

  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const handlePayMethod = (e) => {
    setPaymentMethod(e.target.innerHTML);

    console.count("Changed card image");
  };

  useEffect(() => {
    //Change innerHTML to current target (already saved in paymentMethod)
    paymentMethod === "Master Card"
      ? (creditCarImage.current.src =
          "https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png")
      : paymentMethod === "American Express"
      ? (creditCarImage.current.src =
          "https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png")
      : (creditCarImage.current.src =
          "https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png");
  }, [paymentMethod]);

  const paymentData = useCallback(() => {});

  return (
    <div className="credit-info">
      <div className="credit-info-content">
        <table className="half-input-table">
          <tr>
            <td>Please select your card: </td>
            <td>
              <div className="dropdown" id="card-dropdown">
                <Dropdown
                  trigger={
                    <div className="dropdown-btn" id="current-card">
                      {paymentMethod}
                    </div>
                  }
                  menu={[
                    <option value="master-card" onClick={handlePayMethod}>
                      Master Card
                    </option>,
                    <option value="visa" onClick={handlePayMethod}>
                      Visa
                    </option>,
                    <option value="american-express" onClick={handlePayMethod}>
                      American Express
                    </option>,
                  ]}
                />

                {/* <div className="dropdown-btn" id="current-card">
                        Visa
                      </div>
                      {open ? (
                        <div className="dropdown-select visible">
                          <ul>
                            <li>Master Card</li>
                            <li>American Express</li>
                          </ul>
                        </div>
                      ) : null} */}
              </div>
            </td>
          </tr>
        </table>
        <img
          ref={creditCarImage}
          alt="uno"
          src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
          height="80"
          className="credit-card-image"
          id="credit-card-image"
        ></img>
        Card Number
        <input className="input-field"></input>
        Card Holder
        <input className="input-field"></input>
        <table className="half-input-table">
          <tr>
            <td>
              {" "}
              Expires
              <input className="input-field"></input>
            </td>
            <td>
              CVC
              <input className="input-field"></input>
            </td>
          </tr>
        </table>
        <button className="pay-btn">Checkout</button>
      </div>
    </div>
  );
}

export default CreditInfo;

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(url, { signal: controller.signal })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
    return () => {
      controller.abort();
    };
  }, [url]);
  return { loading, data, error };
}

import React from "react";
import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import usePaymethod from "../hooks/usePaymethod.js";

function CreditInfo() {
  //TODO: save credit info of user
  //TODO: Conect to firebase and hash user data
  //TODO: Validate and format credit card inputs

  /********************************** */
  //https://stackoverflow.com/questions/56136601/passing-a-ref-to-an-html-element-to-a-custom-hook
  //https://reactjs.org/docs/hooks-custom.html
  //https://stackoverflow.com/questions/59000716/react-custom-hook-using-useref-returns-null-for-the-first-time-the-calling-compo

  const paymentLogo = useRef();
  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const { handlePaydata, processCardInfo } = usePaymethod(
    paymentMethod,
    paymentLogo
  );
  const handlePayMethod = (e) => {
    setPaymentMethod(e.target.innerHTML);
  };

  /********************************** */
  /*Handling Credit info with state could be great for server-side live validation
    Not only at the press of a button */

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
          ref={paymentLogo}
          alt="uno"
          src=""
          height="80"
          className="credit-card-image"
          id="credit-card-image"
        ></img>
        Card Number
        <input
          name="cardNumber"
          onChange={handlePaydata}
          className="input-field"
        ></input>
        Card Holder
        <input
          name="cardHolder"
          onChange={handlePaydata}
          className="input-field"
        ></input>
        <table className="half-input-table">
          <tr>
            <td>
              {" "}
              Expires
              <input
                name="expirationDate"
                onChange={handlePaydata}
                className="input-field"
              ></input>
            </td>
            <td>
              CVC
              <input
                name="CVC"
                onChange={handlePaydata}
                className="input-field"
              ></input>
            </td>
          </tr>
        </table>
        <button type="submit" onClick={processCardInfo} className="pay-btn">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CreditInfo;

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [error, setError] = useState("");

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

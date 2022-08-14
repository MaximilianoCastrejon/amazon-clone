import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce(
    (acumulator, current) => acumulator + current.price * current.qty,
    0
  );
  const taxPrice = itemsPrice * 0.16;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const itemsTotal = cartItems.reduce((a, c) => a + c.qty, 0);

  return (
    <div className="subtotal block col-1">
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2 ">{item.title}</div>
          <div className="col-2 center">
            <button
              onClick={() => onAdd(item)}
              className="add btn btn-primary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => onRemove(item)}
              className="remove btn btn-danger btn-sm"
            >
              -
            </button>
          </div>
          <div className="col-2 text-right center">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__items">
              Total items ({cartItems.length === 0 ? 0 : itemsTotal}):
              {/* <strong>
                {cartItems.length === 0
                  ? 0
                  : cartItems.map((item) => (
                      <div key={item.id}>{item.price}</div>
                    ))}
              </strong> */}
            </p>
            {cartItems.length !== 0 && (
              <>
                <hr></hr>
                <div className="row">
                  <div className="col-2">Items Price</div>
                  <div className="col-1 text-right">
                    ${itemsPrice.toFixed(2)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Tax</div>
                  <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                  <div className="col-2">Shipping</div>
                  <div className="col-1 text-right">
                    ${shippingPrice.toFixed(2)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <strong>Total</strong>
                  </div>
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <div className="col-1 text-right">
                          <strong>{value}</strong>
                        </div>
                      </>
                    )}
                    decimalScale={2}
                    value={totalPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </div>
              </>
            )}
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="subtotal__checkout-btn">Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;

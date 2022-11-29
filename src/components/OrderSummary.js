import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../utils/StateProvider";

function OrderSummary() {
  const [{ basket }] = useStateValue();

  const basketDuplicateCheck = [];
  return (
    <div className="order-info">
      <div className="order-info-content">
        <h2>Order Summary</h2>
        <div className="order__summary-scroll">
          {basket?.map((item, index) => {
            if (basketDuplicateCheck.includes(item.id)) return null;
            basketDuplicateCheck.push(item.id);
            return (
              <>
                <div className="line"></div>
                <table key={index} className="order-table">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          alt="uno"
                          src={item.image}
                          className="full-width"
                        ></img>
                      </td>
                      <td>
                        <br /> <span className="thin">{item.title}</span>
                        <br />
                        <span className="thin small">
                          {Array(item.rating)
                            .fill()
                            .map((_, i) => (
                              <StarIcon className="product__star"></StarIcon>
                            ))}
                          {Array(5 - item.rating)
                            .fill()
                            .map((_, i) => (
                              <StarBorderIcon className="product__star-border"></StarBorderIcon>
                            ))}
                          <br />
                          <br />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price">${item.price}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          })}
        </div>
        <div className="line"></div>
        <div className="total">
          <span style={{ float: "left" }}>
            <div className="thin dense">VAT 19%</div>
            <div className="thin dense">Delivery</div>
            TOTAL
          </span>
          <span style={{ float: "right", textAlign: "right" }}>
            <div className="thin dense">$68.75</div>
            <div className="thin dense">$4.95</div>
            $435.55
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;

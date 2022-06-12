import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { Link, useNavigate } from "react-router-dom";
export default function Subtotal({ status }) {
  const [{ basket }, dispatch] = useStateValue();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (status === "Confrim Order") {
      setMessage("Order Confrimed Successfully");
      setTimeout(() => {
        setMessage("");
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} item): <strong>{value}</strong>
            </p>
            {status === "Proceed to checkout" && (
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            )}
            <small style={{ color: "green" }}>{message}</small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={handleClick}>
        <Link to={status === "Proceed to checkout" && "/payment"}>
          {status}
        </Link>
      </button>
    </div>
  );
}

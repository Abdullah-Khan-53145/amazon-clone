import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { InsertEmoticon } from "@mui/icons-material";
export default function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="error loading image"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shoping Basket</h2>
          {basket.map((element, index) => (
            <CheckoutProduct
              id={element.id}
              image={element.image}
              title={element.title}
              price={element.price}
              rating={element.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

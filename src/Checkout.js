import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
export default function CheckOut() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="error loading image"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">
            Hi, {user?.email} your shoping Basket
          </h2>
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
        <Subtotal status="Proceed to checkout" />
      </div>
    </div>
  );
}

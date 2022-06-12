import React from "react";
import "./Home.css";
import Product from "./Product";
export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="5"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-bearter, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Unlocked (Renewed Premium)"
            price={949.0}
            image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SX522_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"
            price={59.99}
            image="https://m.media-amazon.com/images/I/61y4J2vTwFL._AC_SX425_.jpg"
            rating={4}
          />
          <Product
            id="1"
            title="Garmin Forerunner 245, GPS Running Smartwatch with Advanced Dynamics, Slate Gray"
            price={224.99}
            image="https://m.media-amazon.com/images/I/51Wzel4ZD-L._AC_SX522_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="GIGABYTE AORUS GeForce RTX 3080 Master 12G Graphics Card, MAX-Covered Cooling, 12GB 384-bit GDDR6X, GV-N3080AORUS M-12GD Video Card"
            price={999.99}
            image="https://m.media-amazon.com/images/I/61V1t-aXE7L._AC_SY450_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz"
            price={1099.63}
            image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

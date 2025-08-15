import React from "react";
import Hero from "./Hero";
import Universe from "./Universe";
import LeftSectionImage from "./LeftSectionImage";
import RightSectionImage from "./RightSectionImage";

import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSectionImage
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSectionImage />
      <LeftSectionImage
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDescription="The image displays an advertisement for Coin, the direct mutual fund investment platform by StockVerge, India's largest stockbroker."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSectionImage />
      <LeftSectionImage
        imageUrl="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Universe />
    </>
  );
}

export default ProductsPage;

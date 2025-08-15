import React from "react";
import Hero from "./Hero";
import Universe from "./Universe";
import LeftSectionImage from "./LeftSectionImage";
import RightSectionImage from "./RightSectionImage";

import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

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

      <RightSectionImage
        productName="Console"
        productDescription="The central dashboard for your StockVerge account. Gain insights into your trades and investments with in-depth reports and visualisations."
        imageUrl="media/images/console.png"
      />

      <LeftSectionImage
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDescription="The image displays an advertisement for Coin, the direct mutual fund investment platform by StockVerge, India's largest stockbroker."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSectionImage
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        imageUrl="media/images/kite.png"
      />

      <LeftSectionImage
        imageUrl="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center fs-5 p-1">
        Want to know more about our technology stack? Check out the
        <Link style={{ textDecoration: "none" }}> StockVerge.tech </Link> blog.
      </p>

      <Universe />
    </>
  );
}

export default ProductsPage;

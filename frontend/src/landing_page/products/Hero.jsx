import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center mt-5 p-3">
        <h1 className="text-muted">StockVerge Products</h1>
        <h2 className="fs-4 text-muted mt-2">
          Sleek, modern and intuitive trading platforms
        </h2>
        <p className="mt-2 text-muted">
          Check out our{" "}
          <Link style={{ textDecoration: "none", fontWeight: "500" }}>
            investment offerings<i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5">
        <h2 className="fs-3 pt-5 text-muted">
          We pioneered the discount broking model in India.
          <br />
          Now we are breaking ground with our technology.
        </h2>
      </div>

      <div className="row mt-5 border-top p-5 text-muted justify-content-center" style={{fontSize: "1em", lineHeight: "1.8"}}>
        <div className="col-6 p-5" style={{maxWidth: "500px"}}>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            StockVerge, to signify our mission of bringing investors to the
            verge of new opportunities.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5" style={{maxWidth: "500px"}}>
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <Link style={{textDecoration: "none"}}>Rainmatter</Link>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

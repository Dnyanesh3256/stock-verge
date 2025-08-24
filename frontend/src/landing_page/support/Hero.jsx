import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5" id="supportWrapper">
        <h4>Support Portal</h4>

        <a href="">Track Tickets</a>
      </div>

      <div className="row p-5">
        <div className="col-6" style={{ padding: "0 20px"}}>
          <h2 className="fs-3">Search for an answer or browse help topics to create a ticket</h2>

          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
            className="mt-2"
          />

          <br />

          <div className="mt-2">
            <a href="">Track account opening</a>
            <a href="" style={{ marginLeft: "20px" }}>Track segment activation</a>
            <a href="" style={{ marginLeft: "20px" }}>Intraday margins</a>
            <a href="" style={{ marginLeft: "20px" }}>Kite user manual</a>
          </div>
        </div>
        <div className="col-6" style={{ padding: "0 20px", paddingLeft: "150px"}}>
          <h2 className="fs-3">Featured</h2>

          <ol className="mt-2">
            <li>
              <a href="">Current Takeovers and Delisting — January 2025</a>
            </li>
            <li className="mt-2">
              <a href="">Latest Intraday leverages — MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

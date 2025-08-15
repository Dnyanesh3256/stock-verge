import React from "react";
import { Link } from "react-router-dom";

function RightSectionImage({
  productName,
  productDescription,
  learnMore,
  imageUrl,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-6">
          <h2 className="mb-3 text-muted fw-semibold" style={{ fontSize: "1.8rem" }}>
            {productName}
          </h2>
          <p
            className="text-muted"
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.6",
              maxWidth: "90%",
            }}
          >
            {productDescription}
          </p>
          <div className="mt-3">
            <Link
              to={learnMore}
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "400",
                fontSize: "1.05rem",
              }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Learn more <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>

        <div className="col-lg-7 col-md-6 text-center">
          <img
            src={imageUrl}
            alt=""
            className="img-fluid"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSectionImage;

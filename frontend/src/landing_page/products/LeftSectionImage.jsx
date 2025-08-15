import React from "react";
import { Link } from "react-router-dom";

function LeftSectionImage({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5 border-top" style={{padding: "0%"}}>
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-6 text-center">
          <img src={imageUrl} alt="" className="img-fluid" style={{ maxHeight: "500px", marginRight: "10px" }} />
        </div>

        <div className="col-lg-5 col-md-6">
          <h2 className="mb-3 text-muted fw-semibold" style={{ fontSize: "1.8rem" }}>
            {productName}
          </h2>
          <p className="text-muted" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
            {productDescription}
          </p>

          <div className="mb-4">
            <Link to={tryDemo} className="me-4" style={{ textDecoration: "none", fontWeight: "400" }}>
              Try demo <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
            <Link to={learnMore} style={{textDecoration: "none", fontWeight: "400" }}>
              Learn more <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>

          <div className="d-flex gap-3">
            <Link to={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{ height: "45px" }} />
            </Link>
            <Link to={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" style={{ height: "45px" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSectionImage;
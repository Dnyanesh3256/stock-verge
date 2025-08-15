import React from "react";

function Universe() {
  const partners = [
    {
      logo: "media/images/smallcaseLogo.png",
      name: "Zerodha Fund House",
      description: "Thematic investment platform",
    },
    {
      logo: "media/images/sensibullLogo.svg",
      name: "Sensibull",
      description: "Options trading platform",
    },
    {
      logo: "media/images/streakLogo.png",
      name: "Streak",
      description: "Algo & strategy platform",
    }, 
    {
      logo: "media/images/zerodhaFundhouse.png",
      name: "Fundhouse",
      description: "Asset management",
    },
    {
      logo: "media/images/goldenpiLogo.png",
      name: "GoldenPi",
      description: "Bonds trading platform",
    },
    {
      logo: "media/images/dittoLogo.png",
      name: "ditto",
      description: "Personalized insurance",
    },
  ];

  return (
    <div className="container mt-5 mb-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="text-muted mb-3">The StockVerge Universe</h2>
        <p className="text-muted mb-5" style={{fontSize: "1rem"}}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Grid */}
      <div className="row text-center">
        {partners.map((partner, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-5">
            <img
              src={partner.logo}
              alt={partner.name}
              className="mb-3"
              style={{ maxHeight: "60px" }}
            />
            <p
              className="text-muted small"
              style={{ maxWidth: "300px", margin: "0 auto" }}
            >
              {partner.description}
            </p>
          </div>
        ))}
      </div>

      <div className="row text-center">
        <div className="col">
          <button
            className="p-2 btn btn-primary fs-5 mt-3 mb-5"
            style={{ width: "15%" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;

import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row text-center border-top">
        <h2 className="text-muted mt-5">People</h2>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ fontSize: "1em", lineHeight: "1.8" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/Passport_Pic_DT.jpg"
            alt="DT Image"
            style={{ width: "55%", borderRadius: "100%" }}
          />
          <h4 className="mt-2">Dnyaneshwar Tupe</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5 mt-4" style={{fontSize: "17px"}}>
          <p>
            Dnyaneshwar architects and builds full-stack applications,
            transforming complex challenges into clean, scalable solutions. His
            expertise lies in the MERN stack, where he engineers both robust
            backends and intuitive frontends.
          </p>
          <p>
            Tackling new challenges and architecting user-centric solutions is
            his zen.
          </p>
          <p>
            Connect on <Link style={{ textDecoration: "none" }}>Portfolio</Link>{" "}
            / <Link style={{ textDecoration: "none" }}>LinkedIn</Link> / <Link style={{ textDecoration: "none" }}>GitHub</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

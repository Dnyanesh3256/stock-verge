import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container d-flex justify-content-between align-items-center px-3 py-2 bg-dark text-white">
      <div className="indices-container d-flex">
        <div className="nifty me-4 text-center">
          <p className="index mb-0">NIFTY 50</p>
          <p className="index-points mb-0">{100.2}</p>
        </div>
        <div className="sensex text-center">
          <p className="index mb-0">SENSEX</p>
          <p className="index-points mb-0">{100.2}</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;

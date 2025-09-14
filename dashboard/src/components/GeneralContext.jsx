// import React, { createContext, useState } from "react";

// // Create context
// export const GeneralContext = createContext();

// // Create provider
// export const GeneralContextProvider = ({ children }) => {
//   const [state, setState] = useState("someValue");

//   return (
//     <GeneralContext.Provider value={{ state, setState }}>
//       {children}
//     </GeneralContext.Provider>
//   );
// };


import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // 🔴 Import Sell Window

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {}, // 🔴 Add Sell
  closeSellWindow: () => {},  // 🔴 Add Sell
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedBuyStockUID, setSelectedBuyStockUID] = useState("");

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); // 🔴 New state
  const [selectedSellStockUID, setSelectedSellStockUID] = useState(""); // 🔴 New state

  // --- Buy handlers ---
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedBuyStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedBuyStockUID("");
  };

  // --- Sell handlers ---
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedSellStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,   // 🔴 Expose sell
        closeSellWindow: handleCloseSellWindow, // 🔴 Expose sell
      }}
    >
      {props.children}

      {/* Conditionally render Buy/Sell windows */}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedBuyStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedSellStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

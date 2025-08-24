import React, { createContext, useState } from "react";

// Create context
export const GeneralContext = createContext();

// Create provider
export const GeneralContextProvider = ({ children }) => {
  const [state, setState] = useState("someValue");

  return (
    <GeneralContext.Provider value={{ state, setState }}>
      {children}
    </GeneralContext.Provider>
  );
};

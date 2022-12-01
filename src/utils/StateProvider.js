import React, { createContext, useContext, useReducer } from "react";

// Prepares data layer from React page
export const StateContext = createContext();

// Wrap app inside index.js and provide the Data layer so every component has access to this layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from data layer
export const useStateValue = () => useContext(StateContext);

import React, { createContext, useContext, useReducer } from "react";
//prepare for data layer
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);
//this hook allows pull data from the data layer
export const useStateValue = () => useContext(StateContext);


import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";


export const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <ThemeContext.Provider value={[state, dispatch]}>
            {children}
        </ThemeContext.Provider>
    )
}
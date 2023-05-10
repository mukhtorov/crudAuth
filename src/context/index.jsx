import React from 'react'
import { ThemeProvider } from './Theme'
import AuthProvider from './Auth'



export const MainProvider = ({ children }) => {
    return (
        <ThemeProvider>

                {children}

        </ThemeProvider>
    )
}
export default MainProvider

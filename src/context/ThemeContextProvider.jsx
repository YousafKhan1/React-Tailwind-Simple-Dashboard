import React, { createContext, useEffect, useState } from 'react'
export const ThemeCotext = createContext()

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? 'dark' : 'light')
    }
  return (
    <ThemeCotext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeCotext.Provider>
  )
}

export default ThemeContextProvider
import React, { useState, useEffect } from 'react'
export const ThemeContext = React.createContext({
  theme: `light`,
  setTheme: () => {},
})
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(`light`)
  useEffect(() => {
    function loadTheme() {
      const darkModeMediaQuery = window.matchMedia(`(prefers-color-scheme: dark)`)
      const isDarkMode = darkModeMediaQuery.matches
      const themeLocalStorage = localStorage.getItem(`theme`)
      if (themeLocalStorage) {
        return themeLocalStorage
      } else if (isDarkMode) {
        return `dark`
      } else {
        return `light`
      }
    }
    setTheme(loadTheme())
  }, [])
  useEffect(() => {
    localStorage.setItem(`theme`, theme)
  }, [theme])
  return <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>{children}</ThemeContext.Provider>
}
export default ThemeContextProvider

import React, { useState, useEffect, ReactNode } from 'react'

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: `light`, // Default theme
  setTheme: () => {}, // Placeholder function
})

// Define the props for ThemeContextProvider
interface ThemeContextProviderProps {
  children: ReactNode // Accepts children of any valid React type
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(`light`) // State with a specific type

  useEffect(() => {
    const loadTheme = (): string => {
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
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider

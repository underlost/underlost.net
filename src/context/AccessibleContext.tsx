import React, { useState, useEffect, ReactNode } from 'react'

interface AccessibleContextType {
  accessible: boolean
  setAccessible: (accessible: boolean) => void
}

export const AccessibleContext = React.createContext<AccessibleContextType>({
  accessible: false, // Default accessible
  setAccessible: () => {}, // Placeholder function
})

// Define the props for AccessibleContextProvider
interface AccessibleContextProviderProps {
  children: ReactNode // Accepts children of any valid React type
}

const AccessibleContextProvider: React.FC<AccessibleContextProviderProps> = ({ children }) => {
  const [accessible, setAccessible] = useState<boolean>(false) // Default to false

  useEffect(() => {
    const loadAccessible = (): boolean => {
      const accessibleLocalStorage = localStorage.getItem(`accessibleState`)
      return accessibleLocalStorage === `true` // Return the boolean value
    }
    setAccessible(loadAccessible())
  }, [])

  const updateAccessible = (newAccessible: boolean) => {
    setAccessible(newAccessible)
    if (newAccessible) {
      localStorage.setItem(`accessibleState`, `true`)
    } else {
      localStorage.removeItem(`accessibleState`)
    }
  }

  return <AccessibleContext.Provider value={{ accessible, setAccessible: updateAccessible }}>{children}</AccessibleContext.Provider>
}

export default AccessibleContextProvider

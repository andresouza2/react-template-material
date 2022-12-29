import React, { createContext, useCallback, useContext, useState } from 'react'

interface IDrawerContextData {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
}

interface IDrawerProviderProps {
  children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const AppDrawerProvider: React.FC<IDrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}
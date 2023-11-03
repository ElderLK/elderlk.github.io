import React from 'react'

export type ThemeOptions = 'light' | 'dark'
export type ThemeContextData = {
  theme: ThemeOptions
  switchTheme: () => void
}

export const ThemeContextDefaultValues: ThemeContextData = {
  theme: 'dark',
  switchTheme: () => null
}

export const ThemeContext = React.createContext<ThemeContextData>(
  ThemeContextDefaultValues
)

const useTheme = () => React.useContext(ThemeContext)

export { useTheme }

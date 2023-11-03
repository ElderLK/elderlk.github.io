'use client'
import React from 'react'
import { ThemeContext, ThemeOptions } from '@/hooks'
import { getStorageItem, setStorageItem } from '@/utils/localStorage'

export type ThemeProviderProps = {
  children: React.ReactNode
}

const THEME_KEY = 'theme'

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<ThemeOptions>('light')

  React.useEffect(() => {
    const data = getStorageItem(THEME_KEY)
    const savedTheme = data?.[0]

    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const switchTheme = React.useCallback(() => {
    setTheme((t) => {
      const newTheme = t === 'dark' ? 'light' : 'dark'
      setStorageItem(THEME_KEY, [newTheme])
      return newTheme
    })
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme
      }}
    >
      <div data-mode={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

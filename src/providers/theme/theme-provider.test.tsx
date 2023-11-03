import { act, renderHook } from '@testing-library/react'
import { setStorageItem, getStorageItem } from '@/utils/localStorage'
import { useTheme } from '@/hooks/use-theme/use-theme-hooks'

import ThemeProvider, { ThemeProviderProps } from './theme-provider'

describe('Theme Provider', () => {
  beforeEach(() => {
    window?.localStorage?.clear()
  })

  test('Should render light', async () => {
    const wrapperProvider = ({ children }: ThemeProviderProps) => (
      <ThemeProvider>{children}</ThemeProvider>
    )
    setStorageItem('theme', ['light'])

    const { result } = renderHook(() => useTheme(), {
      wrapper: wrapperProvider
    })

    expect(result.current.theme).toBe('light')
  })

  test('Should render dark', async () => {
    const wrapperProvider = ({ children }: ThemeProviderProps) => (
      <ThemeProvider>{children}</ThemeProvider>
    )
    setStorageItem('theme', ['dark'])

    const { result } = renderHook(() => useTheme(), {
      wrapper: wrapperProvider
    })

    expect(result.current.theme).toBe('dark')
  })

  test('Should switch from dark to light and light to dark', async () => {
    const wrapperProvider = ({ children }: ThemeProviderProps) => (
      <ThemeProvider>{children}</ThemeProvider>
    )
    setStorageItem('theme', ['dark'])

    const { result } = renderHook(() => useTheme(), {
      wrapper: wrapperProvider
    })

    expect(result.current.theme).toBe('dark')

    act(() => {
      result.current.switchTheme()
    })

    expect(result.current.theme).toBe('light')

    expect(getStorageItem('theme')).toStrictEqual(['light'])

    act(() => {
      result.current.switchTheme()
    })

    expect(result.current.theme).toBe('dark')

    expect(getStorageItem('theme')).toStrictEqual(['dark'])
  })
})

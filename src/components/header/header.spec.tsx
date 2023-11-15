import React from 'react'
import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter as mockUseRouter } from 'next-router-mock'

import Header from './header.component'
import { default as defaultLocale } from '../../locale/en.json'

jest.mock('next/navigation', () => ({
  useRouter: mockUseRouter,
  usePathname: jest.fn().mockReturnValue('/some-route')
}))

describe('<Header />', () => {
  it('should render the component', () => {
    render(
      <NextIntlClientProvider locale="en" messages={defaultLocale}>
        <Header />
      </NextIntlClientProvider>
    )

    expect(
      screen.getByRole('button', { name: /Open menu/i })
    ).toBeInTheDocument()
  })
})

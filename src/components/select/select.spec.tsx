import React from 'react'
import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter as mockUseRouter } from 'next-router-mock'

import { default as defaultLocale } from '../../locale/en.json'

import Select from './select.component'

jest.mock('next/navigation', () => ({
  useRouter: mockUseRouter,
  usePathname: jest.fn().mockReturnValue('/some-route')
}))

describe('<Select />', () => {
  it('should render the component', () => {
    const { container } = render(
      <NextIntlClientProvider locale="en" messages={defaultLocale}>
        <Select />
      </NextIntlClientProvider>
    )

    expect(screen.getByRole('button', { name: /English/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

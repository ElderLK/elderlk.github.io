import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from './header.component'

describe('<Header />', () => {
  it('should render the component', () => {
    const { container } = render(<Header />)

    expect(
      screen.getByRole('button', { name: /Open main menu/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

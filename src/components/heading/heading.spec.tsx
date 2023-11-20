import React from 'react'
import { render, screen } from '@testing-library/react'

import Heading from './heading.component'

describe('<Heading />', () => {
  it('should render the component', () => {
    render(<Heading>Hello</Heading>)

    expect(screen.getByRole('heading', { name: /Hello/i })).toBeInTheDocument()
  })
})

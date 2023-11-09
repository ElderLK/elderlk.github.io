import React from 'react'
import { render, screen } from '@testing-library/react'

import Terminal from './terminal.component'

describe('<Terminal />', () => {
  it('should render the component', () => {
    render(<Terminal texts={['hello']} title="Hi" />)

    expect(screen.getByRole('heading', { name: /Hi/i })).toBeInTheDocument()
  })
})

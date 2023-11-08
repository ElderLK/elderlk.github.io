import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import Typewritter from './typewritter.component'

describe('<Typewritter />', () => {
  it('should render the component', async () => {
    render(<Typewritter delay={100} text="Example" />)

    expect(screen.queryByText('Example')).toBeFalsy()

    await waitFor(() => {
      expect(screen.queryByText('Example')).toBeTruthy()
    })
  })
})

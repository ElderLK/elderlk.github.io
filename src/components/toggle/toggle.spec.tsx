import React from 'react'
import { render, screen } from '@testing-library/react'

import Toggle from './toggle.component'

describe('<Toogle />', () => {
  it('should render the component', () => {
    const { container } = render(<Toggle label="my-tootle" />)

    expect(
      screen.getByRole('label', { name: /my-tootle/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

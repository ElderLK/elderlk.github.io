import React from 'react'
import { render, screen } from '@testing-library/react'

import ScrollAnimation from './scroll-animation.component'

describe('<ScrollAnimation />', () => {
  it('should render the component', () => {
    const { container } = render(
      <ScrollAnimation>
        <ol>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ol>
      </ScrollAnimation>
    )

    expect(screen.getAllByRole('listitem').length).toEqual(3)

    expect(container.firstChild).toMatchSnapshot()
  })
})

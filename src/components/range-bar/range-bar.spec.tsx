import React from 'react'
import { render, screen } from '@testing-library/react'

import RangeBar from './range-bar.component'

describe('<RangeBar />', () => {
  it('should render the component', () => {
    render(
      <div data-testid="rangerBarFather">
        <RangeBar complete={10} />
      </div>
    )

    const rangeBar = screen.getByTestId('rangerBarFather').firstChild

    expect(rangeBar).toHaveClass('after:w-[10%]')
  })
})

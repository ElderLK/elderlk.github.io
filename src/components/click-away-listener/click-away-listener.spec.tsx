import React from 'react'
import userEvent from '@testing-library/user-event'
import { act, render, screen } from '@testing-library/react'

import ClickAwayListener from './click-away-listener.component'

describe('<ClickAwayListener />', () => {
  it('should not call onClickAway', async () => {
    const functionClickAway = jest.fn()

    render(
      <div>
        <ClickAwayListener onClickAway={functionClickAway}>
          <div data-testid="children">My Component</div>
        </ClickAwayListener>
      </div>
    )

    const clickAwayClildren = await screen.findByTestId('children')

    await act(async () => {
      await userEvent.click(clickAwayClildren)
    })

    expect(functionClickAway).toHaveBeenCalledTimes(0)
  })
  it('should call onClickAway', async () => {
    const functionClickAway = jest.fn()

    render(
      <div data-testid="fatherClickAway">
        <ClickAwayListener onClickAway={functionClickAway}>
          <div>My Component</div>
        </ClickAwayListener>
      </div>
    )

    const fatherClickAway = await screen.findByTestId('fatherClickAway')

    await act(async () => {
      await userEvent.click(fatherClickAway)
    })

    expect(functionClickAway).toHaveBeenCalledTimes(1)

    await act(async () => {
      await userEvent.click(fatherClickAway)
    })

    expect(functionClickAway).toHaveBeenCalledTimes(2)
  })
})

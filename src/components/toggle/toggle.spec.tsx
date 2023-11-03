import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Toggle from './toggle.component'

describe('<Toogle />', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Toggle label="my-tootle" />)

    expect(container.firstChild).toMatchSnapshot()
  })

  test('Should render correctly', () => {
    render(<Toggle label="my-tootle" />)

    expect(
      screen.getByRole('label', { name: /my-tootle/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  test('Should render the component as controlled and switch value', async () => {
    const onToggle = jest.fn()

    render(<Toggle label="my-tootle" checked={false} onToggle={onToggle} />)

    expect(screen.getByRole('checkbox')).not.toBeChecked()

    await act(async () => {
      await userEvent.click(screen.getByRole('checkbox'))
    })

    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  test('Should render the component as uncontrolled and switch value', async () => {
    const ref = React.createRef<HTMLInputElement>()

    render(<Toggle label="my-tootle" ref={ref} />)

    expect(screen.getByRole('checkbox')).not.toBeChecked()
    expect(ref.current?.checked).toBe(false)

    await act(async () => {
      await userEvent.click(screen.getByRole('checkbox'))
    })

    expect(screen.getByRole('checkbox')).toBeChecked()
    expect(ref.current?.checked).toBe(true)
  })
})

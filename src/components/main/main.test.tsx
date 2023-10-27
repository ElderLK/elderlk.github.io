import { render, screen } from '@testing-library/react'

import Main from './main.component'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /my portfolio/i })
    ).toBeInTheDocument()
  })
})

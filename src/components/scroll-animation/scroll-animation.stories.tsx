import { Meta, StoryObj } from '@storybook/react'
import ScrollAnimation from './scroll-animation.component'

const meta = {
  title: 'ScrollAnimation',
  component: ScrollAnimation,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <ol>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ol>
    )
  }
}

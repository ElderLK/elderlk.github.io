import { Meta, StoryObj } from '@storybook/react'
import Toggle from './toggle.component'

const meta = {
  title: 'Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'My Toggle',
    size: 'md'
  }
}

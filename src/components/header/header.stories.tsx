import { Meta, StoryObj } from '@storybook/react'
import Header from './header.component'

const meta = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

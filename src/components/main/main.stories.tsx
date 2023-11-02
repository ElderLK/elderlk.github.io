import { Meta, StoryObj } from '@storybook/react'

import Main from './main.component'

const meta = {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

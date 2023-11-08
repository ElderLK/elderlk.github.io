import { Meta, StoryObj } from '@storybook/react'
import Typewritter from './typewritter.component'

const meta = {
  title: 'Typewritter',
  component: Typewritter,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    delay: 100,
    text: 'example'
  }
}

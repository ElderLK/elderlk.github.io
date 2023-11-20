import { Meta, StoryObj } from '@storybook/react'
import Heading from './heading.component'

const meta = {
  title: 'Heading',
  component: Heading,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Olá'
  }
}

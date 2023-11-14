import { Meta, StoryObj } from '@storybook/react'
import Select from './select.component'

const meta = {
  title: 'Select',
  component: Select,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/'
      }
    },
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

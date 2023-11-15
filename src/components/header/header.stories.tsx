import { Meta, StoryObj } from '@storybook/react'
import Header from './header.component'

const meta = {
  title: 'Header',
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ width: '100vw' }}>
        <Story />
      </div>
    )
  ],
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

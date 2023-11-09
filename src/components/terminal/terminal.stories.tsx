import { Meta, StoryObj } from '@storybook/react'
import Terminal from './terminal.component'

const meta = {
  title: 'Terminal',
  component: Terminal,
  decorators: [
    (Story) => (
      <div style={{ width: '80vw' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Welcome',
    texts: [
      'Hi! 👋🏻',
      'Welcome to my website.',
      "I'm Elder, a software engineer rooted in Curitiba, Brazil.",
      'Please feel free to explore this website and get to know more about me.'
    ]
  }
}

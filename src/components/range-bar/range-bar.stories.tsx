import { Meta, StoryObj } from '@storybook/react'
import RangeBar from './range-bar.component'

const meta = {
  title: 'RangeBar',
  component: RangeBar,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    complete: {
      options: [60, 70, 80, 90],
      control: { type: 'select' }
    }
  },
  decorators: [
    (Story) => (
      <div className="w-[70vw]">
        <Story />
      </div>
    )
  ],
  tags: ['autodocs']
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    complete: 60
  }
}

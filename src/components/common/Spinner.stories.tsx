import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
}
export default meta

type Story = StoryObj<typeof Spinner>

export const Large: Story = {
  render: (args) => <Spinner size={args.size} />,
  args: { size: 'large' },
}

export const Small: Story = {
  render: (args) => <Spinner size={args.size} />,
  args: { size: 'small' },
}

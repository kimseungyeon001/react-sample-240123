import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
}
export default meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  render: (_args) => <Spinner />,
  args: { size: 'large' },
}

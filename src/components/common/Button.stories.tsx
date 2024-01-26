import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
}
export default meta

type Story = StoryObj<typeof Button>

export const Large: Story = {
  render: (args) => <Button label={args.label} />,
  args: { label: 'button label' },
}

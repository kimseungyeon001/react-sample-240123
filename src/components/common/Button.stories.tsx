import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button label={args.label} onClick={args.onClick} />,
  args: { label: 'button label', onClick: () => {} },
}

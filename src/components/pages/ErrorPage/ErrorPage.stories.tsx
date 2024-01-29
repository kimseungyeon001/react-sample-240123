import type { Meta, StoryObj } from '@storybook/react'

import { ErrorPagePresenter } from './ErrorPage'

const meta: Meta<typeof ErrorPagePresenter> = {
  component: ErrorPagePresenter,
}
export default meta

type Story = StoryObj<typeof ErrorPagePresenter>

export const Default: Story = {
  render: (args) => <ErrorPagePresenter message={args.message} />,
  args: { message: 'エラーメッセージ' },
}

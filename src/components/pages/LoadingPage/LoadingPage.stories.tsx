import type { Meta, StoryObj } from '@storybook/react'

import { LoadingPagePresenter } from './LoadingPage'

const meta: Meta<typeof LoadingPagePresenter> = {
  component: LoadingPagePresenter,
}
export default meta

type Story = StoryObj<typeof LoadingPagePresenter>

export const Default: Story = {
  render: (_args) => <LoadingPagePresenter />,
}

import type { Meta, StoryObj } from '@storybook/react'
import { ModalPresenter } from './Modal'

const meta: Meta<typeof ModalPresenter> = {
  component: ModalPresenter,
}
export default meta

type Story = StoryObj<typeof ModalPresenter>

export const Default: Story = {
  render: (args) => (
    <ModalPresenter onClose={args.onClose}>
      <div>モーダル</div>
    </ModalPresenter>
  ),
  args: {
    onClose: () => {},
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { ToDoItemAddPagePresenter } from './ToDoItemAddPage'

const meta: Meta<typeof ToDoItemAddPagePresenter> = {
  component: ToDoItemAddPagePresenter,
}
export default meta

type Story = StoryObj<typeof ToDoItemAddPagePresenter>

export const Default: Story = {
  render: (args) => (
    <ToDoItemAddPagePresenter
      isAddActionLoading={args.isAddActionLoading}
      addActionErrorMessage={args.addActionErrorMessage}
      onAddToDoItemSubmit={args.onAddToDoItemSubmit}
      onBackClick={args.onBackClick}
    />
  ),
  args: {
    isAddActionLoading: false,
    addActionErrorMessage: undefined,
    onAddToDoItemSubmit: () => {},
    onBackClick: () => {},
  },
}

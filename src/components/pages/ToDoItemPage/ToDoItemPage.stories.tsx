import type { Meta, StoryObj } from '@storybook/react'

import { ToDoItemPagePresenter } from './ToDoItemPage'
import { toDoItems } from '../../../mocks/mockData'

const meta: Meta<typeof ToDoItemPagePresenter> = {
  component: ToDoItemPagePresenter,
}
export default meta

type Story = StoryObj<typeof ToDoItemPagePresenter>

export const Default: Story = {
  render: (args) => (
    <ToDoItemPagePresenter
      toDoItem={args.toDoItem}
      isDeleteActionLoading={args.isDeleteActionLoading}
      deleteActionErrorMessage={args.deleteActionErrorMessage}
      onBackClick={args.onBackClick}
      onDeleteToDoItemClick={args.onDeleteToDoItemClick}
    />
  ),
  args: {
    toDoItem: toDoItems.find((item) => item.id === 'item-1'),
    isDeleteActionLoading: false,
    deleteActionErrorMessage: undefined,
    onBackClick: () => {},
    onDeleteToDoItemClick: () => {},
  },
}

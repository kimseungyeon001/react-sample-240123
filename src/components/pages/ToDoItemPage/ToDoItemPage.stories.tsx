import type { Meta, StoryObj } from '@storybook/react'

import { ToDoItemPagePresenter } from './ToDoItemPage'
import { toDoItems } from '@/mocks/mockData'
import { MemoryRouter } from 'react-router-dom'

const meta: Meta<typeof ToDoItemPagePresenter> = {
  component: ToDoItemPagePresenter,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof ToDoItemPagePresenter>

export const Default: Story = {
  render: (args) => (
    <ToDoItemPagePresenter
      toDoItem={args.toDoItem}
      isDeleteActionLoading={args.isDeleteActionLoading}
      deleteActionErrorMessage={args.deleteActionErrorMessage}
      onDeleteToDoItemSubmit={args.onDeleteToDoItemSubmit}
      onBackClick={args.onBackClick}
    />
  ),
  args: {
    toDoItem: toDoItems.find((item) => item.id === 'item-1'),
    isDeleteActionLoading: false,
    deleteActionErrorMessage: undefined,
    onDeleteToDoItemSubmit: () => {},
    onBackClick: () => {},
  },
}

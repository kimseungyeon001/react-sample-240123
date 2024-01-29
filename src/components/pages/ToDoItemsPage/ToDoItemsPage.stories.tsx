import type { Meta, StoryObj } from '@storybook/react'

import { ToDoItemsPagePresenter } from './ToDoItemsPage'
import { toDoItems } from '../../../mocks/mockData'

const meta: Meta<typeof ToDoItemsPagePresenter> = {
  component: ToDoItemsPagePresenter,
}
export default meta

type Story = StoryObj<typeof ToDoItemsPagePresenter>

export const Default: Story = {
  render: (args) => (
    <ToDoItemsPagePresenter
      toDoItems={args.toDoItems}
      onToDoItemClick={args.onToDoItemClick}
    />
  ),
  args: {
    toDoItems,
    onToDoItemClick: () => {},
  },
}

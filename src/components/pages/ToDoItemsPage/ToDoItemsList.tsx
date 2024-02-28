import { ToDoItem } from '@/model'
import { Button } from '@/components/common/Button'

interface ToDoItemsListProps {
  toDoItems: ToDoItem[]
  onToDoItemClick: (id: string) => void
}

export function ToDoItemsList({
  toDoItems,
  onToDoItemClick,
}: ToDoItemsListProps) {
  return (
    <div className="flex flex-col gap-2">
      {toDoItems.map((toDoItem) => (
        <div
          className="flex flex-row justify-between items-center gap-2 border-2 border-black rounded p-2"
          key={toDoItem.id}
        >
          <div className="flex flex-col gap-2">
            <span>{toDoItem.title}</span>
            <p>{toDoItem.description}</p>
          </div>
          <Button onClick={() => onToDoItemClick(toDoItem.id)} label="詳細" />
        </div>
      ))}
    </div>
  )
}

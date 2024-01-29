import { ToDoItem } from '../../../model'
import { Button } from '../../common/Button'

interface ToDoListProps {
  toDoItems: ToDoItem[]
  onToDoItemClick: (id: string) => void
}

export function ToDoList({ toDoItems, onToDoItemClick }: ToDoListProps) {
  return (
    <div className="flex flex-col gap-2">
      {toDoItems.map((todoItem) => (
        <div
          className="flex flex-row justify-between items-center gap-2 border-2 border-black rounded p-2"
          key={todoItem.id}
        >
          <div className="flex flex-col gap-2">
            <span>{todoItem.title}</span>
            <p>{todoItem.description}</p>
          </div>
          <Button onClick={() => onToDoItemClick(todoItem.id)} label="詳細" />
        </div>
      ))}
    </div>
  )
}

import { ToDoItem } from '../../../model'

interface ToDoListProps {
  toDoItems: ToDoItem[]
  onToDoItemClick: (id: string) => void
}

export function ToDoList({ toDoItems, onToDoItemClick }: ToDoListProps) {
  return (
    <div>
      {toDoItems.map((todoItem) => (
        <div className="flex flex-row gap-2" key={todoItem.id}>
          <span>{todoItem.title}:</span>
          <p>{todoItem.description}</p>
          <button onClick={() => onToDoItemClick(todoItem.id)}>詳細へ</button>
        </div>
      ))}
    </div>
  )
}

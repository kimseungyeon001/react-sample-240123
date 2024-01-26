import { ToDoItem } from '../../../model'

interface ToDoDetailProps {
  toDoItem: ToDoItem
  onBackClick: () => void
}

export function ToDoDetail({ toDoItem, onBackClick }: ToDoDetailProps) {
  return (
    <div className="flex flex-row gap-2" key={toDoItem.id}>
      <span>{toDoItem.title}:</span>
      <p>{toDoItem.description}</p>
      <button onClick={onBackClick}>戻る</button>
    </div>
  )
}

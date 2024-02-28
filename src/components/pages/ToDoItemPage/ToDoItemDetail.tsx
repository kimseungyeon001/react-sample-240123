import { useState } from 'react'
import { ToDoItem } from '@/model'
import { Button } from '@/components/common/Button'
import { ToDoItemDeleteModalForm } from './ToDoItemDeleteModalForm'

interface ToDoItemDetailProps {
  toDoItem: ToDoItem
  isDeleteActionLoading: boolean
  deleteActionErrorMessage?: string
  onDeleteToDoItemSubmit: (id: string) => void
}

export function ToDoItemDetail({
  toDoItem,
  isDeleteActionLoading,
  deleteActionErrorMessage,
  onDeleteToDoItemSubmit,
}: ToDoItemDetailProps) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  return (
    <>
      <div className="flex flex-row justify-between items-center border-2 border-black rounded gap-2 p-2">
        <div className="flex flex-col gap-2">
          <span>{toDoItem.title}</span>
          <p>{toDoItem.description}</p>
        </div>
        <div className="flex flex-row gap-2">
          <Button onClick={() => setIsOpenModal(true)} label="削除" />
        </div>
      </div>
      <ToDoItemDeleteModalForm
        toDoItemId={toDoItem.id}
        isOpen={isOpenModal}
        loading={isDeleteActionLoading}
        errorMessage={deleteActionErrorMessage}
        onDeleteSubmit={onDeleteToDoItemSubmit}
        onCloseButtonClick={() => setIsOpenModal(false)}
      />
    </>
  )
}

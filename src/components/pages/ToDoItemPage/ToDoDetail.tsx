import { useCallback, useState } from 'react'
import { ToDoItem } from '../../../model'
import { Button } from '../../common/Button'
import { Modal } from '../../common/Modal'

interface ToDoDetailProps {
  toDoItem: ToDoItem
  isDeleteActionLoading: boolean
  deleteActionErrorMessage?: string
  onDeleteToDoItemClick: (id: string) => void
}

export function ToDoDetail({
  toDoItem,
  isDeleteActionLoading,
  deleteActionErrorMessage,
  onDeleteToDoItemClick,
}: ToDoDetailProps) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const handleDeleteToDoItemClick = useCallback(() => {
    onDeleteToDoItemClick(toDoItem.id)
  }, [onDeleteToDoItemClick, toDoItem.id])

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
      <Modal
        isOpen={isOpenModal}
        onClose={() =>
          isDeleteActionLoading ? undefined : setIsOpenModal(false)
        }
      >
        <div className="flex flex-col">
          <p className="text-center p-2">削除しますか？</p>
          <div className="flex flex-col gap-2">
            <Button
              label={isDeleteActionLoading ? '削除中' : 'はい'}
              disabled={isDeleteActionLoading}
              onClick={handleDeleteToDoItemClick}
            />
            <Button
              label={isDeleteActionLoading ? '削除中' : 'いいえ'}
              disabled={isDeleteActionLoading}
              onClick={() => setIsOpenModal(false)}
            />
          </div>
          {deleteActionErrorMessage !== undefined && (
            <div className="text-center text-red-500 p-2">
              {deleteActionErrorMessage}
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}

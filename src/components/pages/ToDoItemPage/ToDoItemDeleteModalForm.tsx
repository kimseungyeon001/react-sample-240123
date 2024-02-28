import { Button } from '@/components/common/Button'
import { Modal } from '@/components/common/Modal'
import { useCallback, FormEvent } from 'react'

interface ToDoItemDeleteModalFormProps {
  isOpen: boolean
  toDoItemId: string
  loading: boolean
  errorMessage?: string
  onDeleteSubmit: (id: string) => void
  onCloseButtonClick: () => void
}

export function ToDoItemDeleteModalForm({
  isOpen,
  toDoItemId,
  loading,
  errorMessage,
  onDeleteSubmit,
  onCloseButtonClick,
}: ToDoItemDeleteModalFormProps) {
  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      onDeleteSubmit(toDoItemId)
    },
    [onDeleteSubmit, toDoItemId],
  )

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => (loading ? undefined : onCloseButtonClick)}
    >
      <form className="flex flex-col" onSubmit={onSubmit}>
        <p className="text-center p-2">削除しますか？</p>
        <div className="flex flex-col gap-2">
          <Button
            type="submit"
            label={loading ? '削除中...' : 'はい'}
            disabled={loading}
          />
          <Button
            type="button"
            label={loading ? '削除中...' : 'いいえ'}
            disabled={loading}
            onClick={onCloseButtonClick}
          />
          <div className="text-center text-red-500 p-2">{errorMessage}</div>
        </div>
      </form>
    </Modal>
  )
}

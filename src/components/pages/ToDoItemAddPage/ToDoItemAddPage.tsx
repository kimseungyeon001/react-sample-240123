import { useCallback, useMemo } from 'react'
import { useNavigate, useFetcher } from 'react-router-dom'
import { DefaultLayout } from '@/components/common/DefaultLayout'
import { Button } from '@/components/common/Button'
import { ToDoItemAddForm } from './ToDoItemAddForm'
import { ToDoItem } from '@/model'
import { AddToDoItemParams } from '@/router/action'

interface ToDoItemPagePresenterProps {
  isAddActionLoading: boolean
  addActionErrorMessage?: string
  onAddToDoItemSubmit: (params: AddToDoItemParams) => void
  onBackClick: () => void
}

export function ToDoItemAddPagePresenter({
  isAddActionLoading,
  addActionErrorMessage,
  onAddToDoItemSubmit,
  onBackClick,
}: ToDoItemPagePresenterProps) {
  return (
    <DefaultLayout>
      <div className="flex flex-col h-full justify-between p-2">
        <ToDoItemAddForm
          loading={isAddActionLoading}
          errorMessage={addActionErrorMessage}
          onAddSubmit={onAddToDoItemSubmit}
        />
        <div className="flex justify-end">
          <Button onClick={onBackClick} label="戻る" />
        </div>
      </div>
    </DefaultLayout>
  )
}

export function ToDoItemAddPage() {
  const navigate = useNavigate()
  const fetcher = useFetcher<ToDoItem | { errorMessage: string }>()

  const handleBackClick = useCallback(() => {
    navigate({ pathname: '/' })
  }, [navigate])

  const handleAddToDoItemSubmit = useCallback(
    (params: AddToDoItemParams) => {
      fetcher.submit(
        {
          title: params.title,
          description: params.description,
        },
        { method: 'POST', action: '/item-add' },
      )
    },
    [fetcher],
  )

  const isAddActionLoading = useMemo(() => {
    if (
      fetcher.formMethod === 'post' &&
      (fetcher.state === 'loading' || fetcher.state === 'submitting')
    )
      return true
    return false
  }, [fetcher.formMethod, fetcher.state])

  const addActionErrorMessage = useMemo(() => {
    if (fetcher.data !== undefined && 'errorMessage' in fetcher.data)
      return fetcher.data.errorMessage
    return undefined
  }, [fetcher.data])

  return (
    <ToDoItemAddPagePresenter
      isAddActionLoading={isAddActionLoading}
      addActionErrorMessage={addActionErrorMessage}
      onAddToDoItemSubmit={handleAddToDoItemSubmit}
      onBackClick={handleBackClick}
    />
  )
}

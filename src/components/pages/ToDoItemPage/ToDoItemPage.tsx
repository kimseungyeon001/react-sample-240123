import { Suspense, useCallback, useMemo } from 'react'
import { Await, useLoaderData, useNavigate, useFetcher } from 'react-router-dom'
import { DefaultLayout } from '@/components/common/DefaultLayout'
import { LoadingPage } from '@/components/pages/LoadingPage'
import { ErrorPage } from '@/components/pages/ErrorPage'
import { ToDoItem } from '@/model'
import { ToDoItemDetail } from './ToDoItemDetail'
import { Button } from '@/components/common/Button'

interface ToDoItemPagePresenterProps {
  toDoItem: ToDoItem
  isDeleteActionLoading: boolean
  deleteActionErrorMessage?: string
  onDeleteToDoItemSubmit: (id: string) => void
  onBackClick: () => void
}

export function ToDoItemPagePresenter({
  toDoItem,
  isDeleteActionLoading,
  deleteActionErrorMessage,
  onBackClick,
  onDeleteToDoItemSubmit,
}: ToDoItemPagePresenterProps) {
  return (
    <DefaultLayout>
      <div className="flex flex-col h-full justify-between p-2">
        <ToDoItemDetail
          toDoItem={toDoItem}
          isDeleteActionLoading={isDeleteActionLoading}
          deleteActionErrorMessage={deleteActionErrorMessage}
          onDeleteToDoItemSubmit={onDeleteToDoItemSubmit}
        />
        <div className="flex justify-end">
          <Button onClick={onBackClick} label="戻る" />
        </div>
      </div>
    </DefaultLayout>
  )
}

export function ToDoItemPage() {
  const navigate = useNavigate()
  const { response } = useLoaderData() as { response: Promise<ToDoItem> }
  const fetcher = useFetcher<ToDoItem | { errorMessage: string }>()

  const handleBackClick = useCallback(() => {
    navigate({ pathname: '/' })
  }, [navigate])

  const handleDeleteToDoItemSubmit = useCallback(
    (id: string) => {
      fetcher.submit({}, { method: 'DELETE', action: `/${id}` })
    },
    [fetcher],
  )

  const isDeleteActionLoading = useMemo(() => {
    if (
      fetcher.formMethod === 'delete' &&
      (fetcher.state === 'loading' || fetcher.state === 'submitting')
    )
      return true
    return false
  }, [fetcher.formMethod, fetcher.state])

  const deleteActionErrorMessage = useMemo(() => {
    if (fetcher.data !== undefined && 'errorMessage' in fetcher.data)
      return fetcher.data.errorMessage
    return undefined
  }, [fetcher.data])

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await resolve={response} errorElement={<ErrorPage />}>
        {(toDoItem) => (
          <ToDoItemPagePresenter
            toDoItem={toDoItem}
            isDeleteActionLoading={isDeleteActionLoading}
            deleteActionErrorMessage={deleteActionErrorMessage}
            onBackClick={handleBackClick}
            onDeleteToDoItemSubmit={handleDeleteToDoItemSubmit}
          />
        )}
      </Await>
    </Suspense>
  )
}

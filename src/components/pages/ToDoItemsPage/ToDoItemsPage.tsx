import { Suspense, useCallback } from 'react'
import { Await, useLoaderData, useNavigate } from 'react-router-dom'
import { DefaultLayout } from '@/components/common/DefaultLayout'
import { LoadingPage } from '@/components/pages/LoadingPage'
import { ErrorPage } from '@/components/pages/ErrorPage'
import { ToDoItem } from '@/model'
import { ToDoItemsList } from './ToDoItemsList'
import { Button } from '@/components/common/Button'

interface ToDoItemsPagePresenterProps {
  toDoItems: ToDoItem[]
  onToDoItemClick: (id: string) => void
  onToDoItemAddClick: () => void
}

export function ToDoItemsPagePresenter({
  toDoItems,
  onToDoItemClick,
  onToDoItemAddClick,
}: ToDoItemsPagePresenterProps) {
  return (
    <DefaultLayout>
      <div className="flex flex-col h-full justify-between p-2">
        <ToDoItemsList
          toDoItems={toDoItems}
          onToDoItemClick={onToDoItemClick}
        />
        <div className="flex justify-end">
          <Button onClick={onToDoItemAddClick} label="追加" />
        </div>
      </div>
    </DefaultLayout>
  )
}

export function ToDoItemsPage() {
  const navigate = useNavigate()
  const { response } = useLoaderData() as {
    response: Promise<ToDoItem[]>
  }

  const handleToDoItemClick = useCallback(
    (id: string) => {
      navigate({ pathname: `/${id}` })
    },
    [navigate],
  )

  const handleToDoItemAddClick = useCallback(() => {
    navigate({ pathname: `/item-add` })
  }, [navigate])

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await resolve={response} errorElement={<ErrorPage />}>
        {(toDoItems) => (
          <ToDoItemsPagePresenter
            toDoItems={toDoItems}
            onToDoItemClick={handleToDoItemClick}
            onToDoItemAddClick={handleToDoItemAddClick}
          />
        )}
      </Await>
    </Suspense>
  )
}

import { Suspense, useCallback } from 'react'
import { Await, useFetcher, useLoaderData, useNavigate } from 'react-router-dom'
import { DefaultLayout } from '../../common/DefaultLayout'
import { LoadingPage } from '../LoadingPage'
import { ErrorPage } from '../ErrorPage'
import { ToDoItem } from '../../../model'
import { ToDoList } from './ToDoList'

interface ToDoItemsPagePresenterProps {
  toDoItems: ToDoItem[]
  onToDoItemClick: (id: string) => void
}

export function ToDoItemsPagePresenter({
  toDoItems,
  onToDoItemClick,
}: ToDoItemsPagePresenterProps) {
  return (
    <DefaultLayout>
      <div className="flex flex-col h-full justify-between p-2">
        <div className="flex flex-col gap-4">
          <ToDoList toDoItems={toDoItems} onToDoItemClick={onToDoItemClick} />
        </div>
      </div>
    </DefaultLayout>
  )
}

export function ToDoItemsPage() {
  const navigate = useNavigate()
  const { response } = useLoaderData() as { response: Promise<ToDoItem[]> }

  const handleToDoItemClick = useCallback(
    (id: string) => {
      navigate({ pathname: `/${id}` })
    },
    [navigate],
  )

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await resolve={response} errorElement={<ErrorPage />}>
        {(toDoItems) => (
          <ToDoItemsPagePresenter
            toDoItems={toDoItems}
            onToDoItemClick={handleToDoItemClick}
          />
        )}
      </Await>
    </Suspense>
  )
}

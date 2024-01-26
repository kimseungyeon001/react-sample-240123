import { Suspense, useCallback } from 'react'
import { Await, useLoaderData, useNavigate } from 'react-router-dom'
import { DefaultLayout } from '../../common/DefaultLayout'
import { LoadingPage } from '../LoadingPage'
import { ErrorPage } from '../ErrorPage'
import { ToDoItem } from '../../../model'
import { ToDoDetail } from './ToDoDetail'

interface ToDoItemPagePresenterProps {
  toDoItem: ToDoItem
  onBackClick: () => void
}

export function ToDoItemPagePresenter({
  toDoItem,
  onBackClick,
}: ToDoItemPagePresenterProps) {
  return (
    <DefaultLayout>
      <ToDoDetail toDoItem={toDoItem} onBackClick={onBackClick} />
    </DefaultLayout>
  )
}

export function ToDoItemPage() {
  const navigate = useNavigate()
  const { response } = useLoaderData() as { response: Promise<ToDoItem[]> }

  const handleBackClick = useCallback(() => {
    navigate({ pathname: '/' })
  }, [navigate])

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await resolve={response} errorElement={<ErrorPage />}>
        {(toDoItem) => (
          <ToDoItemPagePresenter
            toDoItem={toDoItem}
            onBackClick={handleBackClick}
          />
        )}
      </Await>
    </Suspense>
  )
}

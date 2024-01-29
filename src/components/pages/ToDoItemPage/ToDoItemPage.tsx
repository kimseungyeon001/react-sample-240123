import { Suspense, useCallback, useMemo } from 'react'
import {
  Await,
  useLoaderData,
  useNavigate,
  useActionData,
  useSubmit,
  useNavigation,
} from 'react-router-dom'
import { DefaultLayout } from '../../common/DefaultLayout'
import { LoadingPage } from '../LoadingPage'
import { ErrorPage } from '../ErrorPage'
import { ToDoItem } from '../../../model'
import { ToDoDetail } from './ToDoDetail'
import { Button } from '../../common/Button'

interface ToDoItemPagePresenterProps {
  toDoItem: ToDoItem
  isDeleteActionLoading: boolean
  deleteActionErrorMessage?: string
  onBackClick: () => void
  onDeleteToDoItemClick: (id: string) => void
}

export function ToDoItemPagePresenter({
  toDoItem,
  isDeleteActionLoading,
  deleteActionErrorMessage,
  onBackClick,
  onDeleteToDoItemClick,
}: ToDoItemPagePresenterProps) {
  return (
    <DefaultLayout>
      <div className="flex flex-col h-full justify-between p-2">
        <ToDoDetail
          toDoItem={toDoItem}
          isDeleteActionLoading={isDeleteActionLoading}
          deleteActionErrorMessage={deleteActionErrorMessage}
          onDeleteToDoItemClick={onDeleteToDoItemClick}
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
  const submit = useSubmit()
  const actionData = useActionData() as { message: string } | ToDoItem
  const navigation = useNavigation()
  const { response } = useLoaderData() as { response: Promise<ToDoItem> }

  const isDeleteActionLoading = useMemo(() => {
    if (
      navigation.formMethod === 'delete' &&
      (navigation.state === 'loading' || navigation.state === 'submitting')
    )
      return true
    return false
  }, [navigation])

  const deleteActionErrorMessage = useMemo(() => {
    if (actionData !== undefined && 'message' in actionData)
      return actionData.message
    return undefined
  }, [actionData])

  const handleBackClick = useCallback(() => {
    navigate({ pathname: '/' })
  }, [navigate])

  const handleDeleteToDoItemClick = useCallback(
    async (id: string) => {
      submit({ id }, { method: 'DELETE', action: `/${id}` })
    },
    [submit],
  )

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await resolve={response} errorElement={<ErrorPage />}>
        {(toDoItem) => (
          <ToDoItemPagePresenter
            toDoItem={toDoItem}
            isDeleteActionLoading={isDeleteActionLoading}
            deleteActionErrorMessage={deleteActionErrorMessage}
            onBackClick={handleBackClick}
            onDeleteToDoItemClick={handleDeleteToDoItemClick}
          />
        )}
      </Await>
    </Suspense>
  )
}

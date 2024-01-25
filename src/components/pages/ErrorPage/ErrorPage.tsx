import { useAsyncError } from 'react-router-dom'
import { DefaultLayout } from '../../common/DefaultLayout'

interface ErrorPagePresenterProps {
  message: string
}

export function ErrorPagePresenter({ message }: ErrorPagePresenterProps) {
  return <DefaultLayout>{message}</DefaultLayout>
}

export function ErrorPage() {
  const error = useAsyncError() as Error

  console.warn('error check:', error)
  return <ErrorPagePresenter message={error.message} />
}

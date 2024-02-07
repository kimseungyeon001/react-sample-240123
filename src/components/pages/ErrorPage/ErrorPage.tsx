import { useAsyncError } from 'react-router-dom'
import { DefaultLayout } from '@/components/common/DefaultLayout'

interface ErrorPagePresenterProps {
  message: string
}

export function ErrorPagePresenter({ message }: ErrorPagePresenterProps) {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center h-full">{message}</div>
    </DefaultLayout>
  )
}

export function ErrorPage() {
  const error = useAsyncError() as Error

  console.warn('error check:', error)
  return <ErrorPagePresenter message={error.message} />
}

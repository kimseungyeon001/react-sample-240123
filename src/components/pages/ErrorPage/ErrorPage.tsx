import { useRouteError } from 'react-router-dom'
import { DefaultLayout } from '../../common/DefaultLayout'

export function ErrorPagePresenter() {
  return <DefaultLayout>Error Page</DefaultLayout>
}

export function ErrorPage() {
  const error = useRouteError()
  console.warn('error check:', error)
  return <ErrorPagePresenter />
}

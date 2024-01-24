import { useRouteError } from 'react-router-dom'
import { DefaultLayout } from '../../common/DefaultLayout'

export function ErrorPagePresenter() {
  return <DefaultLayout>TEST</DefaultLayout>
}

export function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  return <ErrorPagePresenter />
}

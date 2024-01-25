import { DefaultLayout } from '../../common/DefaultLayout'
import { Spinner } from '../../common/Spinner'

export function LoadingPagePresenter() {
  return (
    <DefaultLayout>
      <Spinner />
    </DefaultLayout>
  )
}

export function LoadingPage() {
  return <LoadingPagePresenter />
}

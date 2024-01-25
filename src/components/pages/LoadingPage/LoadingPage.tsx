import { DefaultLayout } from '../../common/DefaultLayout'
import { Spinner } from '../../common/Spinner'

export function LoadingPagePresenter() {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center">
        <Spinner size="large" />
      </div>
    </DefaultLayout>
  )
}

export function LoadingPage() {
  return <LoadingPagePresenter />
}

import { DefaultLayout } from '@/components/common/DefaultLayout'
import { Spinner } from '@/components/common/Spinner'

export function LoadingPagePresenter() {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center h-full">
        <Spinner />
      </div>
    </DefaultLayout>
  )
}

export function LoadingPage() {
  return <LoadingPagePresenter />
}

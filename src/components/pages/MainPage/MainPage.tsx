import { Suspense } from 'react'
import { useLoaderData } from 'react-router-dom'
import { DefaultLayout } from '../../common/DefaultLayout'

interface MainPagePresenterProps {
  data: string
}

export function MainPagePresenter({ data }: MainPagePresenterProps) {
  return <DefaultLayout>{data}</DefaultLayout>
}

export function MainPage() {
  const { data } = useLoaderData()

  return (
    <Suspense fallback={<div>...loading</div>}>
      <MainPagePresenter data={data} />
    </Suspense>
  )
}

import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { DefaultLayout } from '../../common/DefaultLayout'
import { LoadingPage } from '../LoadingPage'
import { ErrorPage } from '../ErrorPage'

interface MainPagePresenterProps {
  data: {
    title: string
  }
}

export function MainPagePresenter({ data }: MainPagePresenterProps) {
  return <DefaultLayout>{JSON.stringify(data)}</DefaultLayout>
}

export function MainPage() {
  const { response } = useLoaderData() as { response: Promise<any> }

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await resolve={response} errorElement={<ErrorPage />}>
        {(data) => <MainPagePresenter data={data} />}
      </Await>
    </Suspense>
  )
}

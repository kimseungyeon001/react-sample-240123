import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { DefaultLayout } from '../../common/DefaultLayout'
import { LoadingPage } from '../LoadingPage'
import { ErrorPage } from '../ErrorPage'
import { Main } from '../../../model'
import { MainSearchBar } from './MainSearchBar'

interface MainPagePresenterProps {
  data: Main
}

export function MainPagePresenter({ data }: MainPagePresenterProps) {
  console.log(data)
  return (
    <DefaultLayout>
      <MainSearchBar />
      <div>{data.title}</div>
    </DefaultLayout>
  )
}

export function MainPage() {
  const { response } = useLoaderData() as { response: Promise<Main> }

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await resolve={response} errorElement={<ErrorPage />}>
        {(data) => <MainPagePresenter data={data} />}
      </Await>
    </Suspense>
  )
}

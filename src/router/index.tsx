import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../components/pages/MainPage'
import { fetchMain } from './loader'

export function buildRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      loader: fetchMain,
    },
  ])
  return router
}

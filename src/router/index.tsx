import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../components/pages/MainPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    loader: () => {
      return {
        data: 'TEST???',
      }
    },
    errorElement: <div>Error</div>,
  },
])

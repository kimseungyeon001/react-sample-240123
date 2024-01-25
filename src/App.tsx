import { RouterProvider } from 'react-router-dom'
import { buildRouter } from './router'

function App() {
  const router = buildRouter()
  return <RouterProvider router={router} />
}

export default App

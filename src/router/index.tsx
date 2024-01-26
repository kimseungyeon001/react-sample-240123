import { createBrowserRouter } from 'react-router-dom'
import { ToDoItemsPage } from '../components/pages/ToDoItemsPage'
import { ToDoItemPage } from '../components/pages/ToDoItemPage'
import { fetchTodoList, fetchTodoItem } from './loader'

export function buildRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ToDoItemsPage />,
      loader: fetchTodoList,
    },
    {
      path: '/:id',
      element: <ToDoItemPage />,
      loader: fetchTodoItem,
    },
  ])
  return router
}

import { createBrowserRouter } from 'react-router-dom'
import { ToDoItemsPage } from '@/components/pages/ToDoItemsPage'
import { ToDoItemPage } from '@/components/pages/ToDoItemPage'
import { fetchTodoList, fetchTodoItem } from './loader'
import { deleteToDoItem } from './action'

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
      action: async ({ params, request }) => {
        switch (request.method) {
          case 'DELETE':
            const result = await deleteToDoItem(params.id!)
            return result
        }
      },
    },
  ])
  return router
}

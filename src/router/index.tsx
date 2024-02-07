import { createBrowserRouter, defer } from 'react-router-dom'
import { ToDoItemsPage } from '@/components/pages/ToDoItemsPage'
import { ToDoItemPage } from '@/components/pages/ToDoItemPage'
import { deleteToDoItem } from './action'
import { fetchTodoItems, fetchTodoItem } from './loader'

export function buildRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ToDoItemsPage />,
      loader: async () => {
        return defer({
          response: fetchTodoItems(),
        })
      },
    },
    {
      path: '/:id',
      element: <ToDoItemPage />,
      loader: async ({ params }) => {
        return defer({
          response: fetchTodoItem(params.id!),
        })
      },
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

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
        // TODO: 追加Action
        switch (request.method) {
          case 'DELETE':
            return deleteToDoItem(params.id!)
        }
      },
    },
  ])
  return router
}

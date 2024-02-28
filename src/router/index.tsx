import { createBrowserRouter, defer, redirect } from 'react-router-dom'
import { ToDoItemsPage } from '@/components/pages/ToDoItemsPage'
import { ToDoItemPage } from '@/components/pages/ToDoItemPage'
import { ToDoItemAddPage } from '@/components/pages/ToDoItemAddPage'
import { deleteToDoItem, addToDoItem } from './action'
import { fetchToDoItems, fetchToDoItem } from './loader'

export function buildRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ToDoItemsPage />,
      loader: async () => {
        return defer({
          response: fetchToDoItems(),
        })
      },
    },
    {
      path: '/:id',
      element: <ToDoItemPage />,
      loader: async ({ params }) => {
        return defer({
          response: fetchToDoItem(params.id!),
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
    {
      path: '/item-add',
      element: <ToDoItemAddPage />,
      action: async ({ request }) => {
        switch (request.method) {
          case 'POST':
            const formData = await request.formData()
            const title = formData.get('title') as string
            const description = formData.get('description') as string
            const result = await addToDoItem({
              title: title,
              description: description,
            })
            if (!('errorMessage' in result)) return redirect('/')
            return result
        }
      },
    },
  ])
  return router
}

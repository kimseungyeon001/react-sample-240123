import { http, HttpResponse, delay } from 'msw'
import { toDoItems } from './mockData'
import { config } from '../config'

const baseUrl = config.baseUrl

export function buildFetchTodoItems() {
  return http.get(`${baseUrl}/items`, async () => {
    await delay(1000)
    return HttpResponse.json(toDoItems)
  })
}

export function buildFetchTodoItem() {
  return http.get(`${baseUrl}/items/:id`, async ({ params }) => {
    await delay(1000)
    const todoItem = toDoItems.find((item) => item.id === params.id)
    return HttpResponse.json(todoItem)
  })
}

export const handlers = [buildFetchTodoItems(), buildFetchTodoItem()]

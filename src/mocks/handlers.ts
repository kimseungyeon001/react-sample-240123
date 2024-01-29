import { http, HttpResponse, delay } from 'msw'
import { toDoItems } from './mockData'
import { config } from '../config'

const baseUrl = config.baseUrl

// 一覧
export function buildFetchToDoItems() {
  return http.get(`${baseUrl}/items`, async () => {
    await delay(1000)
    return HttpResponse.json(toDoItems)
  })
}

export function buildFetchToDoItemsError() {
  return http.get(`${baseUrl}/items`, async () => {
    await delay(1000)
    return HttpResponse.error()
  })
}

// 詳細
export function buildFetchToDoItem() {
  return http.get(`${baseUrl}/items/:id`, async ({ params }) => {
    await delay(1000)
    const toDoItem = toDoItems.find((item) => item.id === params.id)
    return HttpResponse.json(toDoItem)
  })
}

export function buildFetchToDoItemError() {
  return http.get(`${baseUrl}/items/:id`, async () => {
    await delay(1000)
    return HttpResponse.error()
  })
}

// 削除
export function buildDeleteToDoItem() {
  return http.delete(`${baseUrl}/items/:id`, async ({ params }) => {
    await delay(1000)
    const toDoItem = toDoItems.find((item) => item.id === params.id)
    return HttpResponse.json(toDoItem)
  })
}

export function buildDeleteToDoItemError() {
  return http.delete(`${baseUrl}/items/:id`, async () => {
    await delay(1000)
    return HttpResponse.json({ message: 'forbidden' }, { status: 403 })
  })
}

export const handlers = [
  buildFetchToDoItems(),
  buildFetchToDoItem(),
  buildDeleteToDoItem(),
]

import { config } from '@/config'

const baseUrl = config.baseUrl

// NOTE: 一覧
export async function fetchTodoItems() {
  const response = await fetch(`${baseUrl}/items`, { method: 'GET' })
  switch (response.status) {
    case 200:
      return response.json()
    case 404:
      throw new Error('404エラー')
    default:
      throw new Error('エラー')
  }
}

// NOTE: 詳細
export async function fetchTodoItem(id: string) {
  const response = await fetch(`${baseUrl}/items/${id}`, {
    method: 'GET',
  })
  switch (response.status) {
    case 200:
      return response.json()
    case 404:
      throw new Error('404エラー')
    default:
      throw new Error('エラー')
  }
}

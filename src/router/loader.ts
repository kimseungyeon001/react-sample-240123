import { config } from '@/config'

const baseUrl = config.baseUrl

// NOTE: 一覧
export async function fetchToDoItems() {
  try {
    const response = await fetch(`${baseUrl}/items`, { method: 'GET' })
    switch (response.ok) {
      case true:
        return response.json()
      default:
        throw Error(`${response.status}エラー`)
    }
  } catch (error: unknown) {
    console.warn('toDoItems error', error)
    throw error
  }
}

// NOTE: 詳細
export async function fetchToDoItem(id: string) {
  try {
    const response = await fetch(`${baseUrl}/items/${id}`, {
      method: 'GET',
    })
    switch (response.ok) {
      case true:
        return response.json()
      default:
        throw Error(`${response.status}エラー`)
    }
  } catch (error) {
    console.warn('toDoItem error', error)
    throw error
  }
}

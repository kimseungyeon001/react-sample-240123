import { config } from '@/config'
import { CustomError } from '@/utils/errorUtils'

const baseUrl = config.baseUrl

// NOTE: 一覧
export async function fetchToDoItems() {
  try {
    const response = await fetch(`${baseUrl}/items`, { method: 'GET' })
    switch (response.ok) {
      case true:
        return response.json()
      default:
        const message = response.statusText
        const statusCode = response.status
        throw new CustomError(message, statusCode)
    }
  } catch (error: unknown) {
    console.error('toDoItems error', error)
    switch ((error as CustomError).statusCode) {
      case 404:
        throw new Error('not found')
      default:
        throw new Error('unexpected error')
    }
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
        const message = response.statusText
        const statusCode = response.status
        throw new CustomError(message, statusCode)
    }
  } catch (error: unknown) {
    console.error('toDoItem error', error)
    switch ((error as CustomError).statusCode) {
      case 404:
        throw new Error('not found')
      default:
        throw new Error('unexpected error')
    }
  }
}

import { config } from '@/config'

const baseUrl = config.baseUrl

// NOTE: 削除
export async function deleteToDoItem(id: string) {
  try {
    const response = await fetch(`${baseUrl}/items/${id}`, {
      method: 'DELETE',
    })
    switch (response.status) {
      case 200:
        const data = await response.json()
        return data
      case 403:
        return {
          errorMessage: '403エラー',
        }
      default:
        return {
          errorMessage: 'エラー',
        }
    }
  } catch (error) {
    return {
      errorMessage: 'エラー',
    }
  }
}

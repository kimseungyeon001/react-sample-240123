import { config } from '@/config'

const baseUrl = config.baseUrl

// TODO: 追加API

// NOTE: 削除
export async function deleteToDoItem(id: string) {
  try {
    const response = await fetch(`${baseUrl}/items/${id}`, {
      method: 'DELETE',
    })
    return response.json()
  } catch (error) {
    return error
  }
}

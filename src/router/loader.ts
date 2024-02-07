import { defer, Params } from 'react-router-dom'
import { config } from '@/config'

const baseUrl = config.baseUrl

// NOTE: 一覧
export function fetchTodoList() {
  const response = fetch(`${baseUrl}/items`, { method: 'GET' }).then((res) =>
    res.json(),
  )
  return defer({
    response: response,
  })
}

// NOTE: 詳細
export function fetchTodoItem({ params }: { params: Params<'id'> }) {
  const response = fetch(`${baseUrl}/items/${params.id}`, {
    method: 'GET',
  }).then((res) => res.json())
  return defer({
    response: response,
  })
}

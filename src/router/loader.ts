import { defer, Params } from 'react-router-dom'
import { config } from '../config'

const baseUrl = config.baseUrl

// NOTE: 一覧
export function fetchTodoList() {
  const responsePromise = fetch(`${baseUrl}/items`, { method: 'GET' }).then(
    (res) => res.json(),
  )
  return defer({
    response: responsePromise,
  })
}

// NOTE: 詳細
export function fetchTodoItem({ params }: { params: Params<'id'> }) {
  const responsePromise = fetch(`${baseUrl}/items/${params.id}`, {
    method: 'GET',
  }).then((res) => res.json())
  return defer({
    response: responsePromise,
  })
}

// NOTE: 追加
export function addTodoItem() {}

// NOTE: 削除
export function deleteTodoItem() {}

// NOTE: 更新
export function updateTodoItem() {}

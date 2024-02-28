import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { useCallback, FormEvent } from 'react'
import { AddToDoItemParams } from '@/router/action'

interface ToDoItemAddFormProps {
  loading: boolean
  errorMessage?: string
  onAddSubmit: (params: AddToDoItemParams) => void
}

export function ToDoItemAddForm({
  loading,
  errorMessage,
  onAddSubmit,
}: ToDoItemAddFormProps) {
  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const form = event.target as HTMLFormElement
      const inputs = form.elements
      const title = (inputs.namedItem('title') as HTMLInputElement).value
      const description = (inputs.namedItem('description') as HTMLInputElement)
        .value
      onAddSubmit({
        title,
        description,
      })
    },
    [onAddSubmit],
  )

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <label className="font-bold" htmlFor="title">
        タイトル
      </label>
      <Input
        id="title"
        name="title"
        placeholder="タイトル"
        disabled={loading}
      />
      <label className="font-bold" htmlFor="description">
        説明
      </label>
      <Input
        id="description"
        name="description"
        placeholder="説明"
        disabled={loading}
      />
      <div className="flex flex-col gap-2">
        <Button
          type="submit"
          label={loading ? '追加中...' : '追加'}
          disabled={loading}
        />
        <div className="text-center text-red-500 p-2">{errorMessage}</div>
      </div>
    </form>
  )
}

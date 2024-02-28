interface InputProps {
  id?: string
  type?: 'text'
  name?: string
  disabled?: boolean
  placeholder: string
}

export function Input({
  id,
  type = 'text',
  name,
  disabled = false,
  placeholder,
}: InputProps) {
  return (
    <input
      className="border-2 border-black font-bold rounded p-2"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}

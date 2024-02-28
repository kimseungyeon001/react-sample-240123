interface ButtonProps {
  label: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export function Button({
  label,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className="border-2 border-black font-bold rounded p-2"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

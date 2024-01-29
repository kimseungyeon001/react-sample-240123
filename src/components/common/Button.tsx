interface ButtonProps {
  label: string
  disabled?: boolean
  onClick: () => void
}

export function Button({ label, disabled = false, onClick }: ButtonProps) {
  return (
    <button
      className="border-2 border-black font-bold rounded p-2"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

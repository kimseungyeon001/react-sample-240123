interface SpinnerProps {
  size: 'large' | 'small'
}

export function Spinner({ size }: SpinnerProps) {
  return (
    <div
      className={`
        ${size === 'large' && 'h-[110px] w-[110px]'}
        ${size === 'small' && 'h-[60px] w-[60px]'}
        animate-spin
        rounded-full
        ${size === 'large' && 'border-[10px] border-t-[10px]'}
        ${size === 'small' && 'border-[5px] border-t-[5px]'}
        border-black
        border-t-white
        `}
    />
  )
}

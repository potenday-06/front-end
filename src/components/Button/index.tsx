import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  color?: string
}

const Button = ({
  children,
  onClick,
  disabled,
  color = 'bg-purple-30',
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${color} w-full cursor-pointer rounded-24 py-13 text-18-600 text-white`}
    >
      {children}
    </button>
  )
}

export default Button

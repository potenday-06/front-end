import clsx from 'clsx'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  color?: string
  type?: 'primary' | 'secondary' | 'login'
}

const Button = ({
  children,
  onClick,
  disabled,
  color = 'bg-purple-20',
  type = 'primary',
}: ButtonProps) => {
  const buttonStyles = clsx(
    'w-full cursor-pointer rounded-24 py-13 text-16-600',
    {
      'text-white': type === 'primary',
      'flex h-max items-center justify-center gap-10 rounded-30':
        type === 'login',
      'text-purple-40 bg-white hover:bg-purple-10 hover:text-white':
        type === 'secondary',
    }
  )

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${color} ${buttonStyles}`}
    >
      {children}
    </button>
  )
}

export default Button

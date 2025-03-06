import clsx from 'clsx'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  color?: string
  type?: string
}

const Button = ({
  children,
  onClick,
  disabled,
  color = 'bg-purple-30',
  type,
}: ButtonProps) => {
  const buttonStyles = clsx(
    'w-full cursor-pointer rounded-24 py-13 text-16-600 text-white',
    {
      'flex h-max items-center justify-center gap-10 rounded-30':
        type === 'login',
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

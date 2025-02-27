import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
}

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='w-full rounded-24 bg-purple-30 py-13 text-18-600 text-white'
    >
      {children}
    </button>
  )
}

export default Button

import { ReactNode } from 'react'

export type MessageType = 'user' | 'ai'

export type MessageProps = {
  type: MessageType
  content?: string
  children?: ReactNode
}

const MessageWrapper = ({ type, children }: MessageProps) => {
  return (
    <div className={`mb-16 ${type === 'user' ? 'text-right' : 'text-left'}`}>
      {children}
    </div>
  )
}

export default MessageWrapper

import { ReactNode } from 'react'
import { MessageType } from '../api/wholeConversation/route'

export type MessageProps = {
  type: MessageType['type']
  content?: string
  children?: ReactNode
}

const MessageWrapper = ({ type, children }: MessageProps) => {
  return (
    <div className={`mb-16 ${type === 'USER' ? 'text-right' : 'text-left'}`}>
      {children}
    </div>
  )
}

export default MessageWrapper

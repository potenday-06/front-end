import MessageWrapper from './MessageWrapper'
import UserMessage from './UserMessage'
import AiMessage from './AiMessage'
import { MessageType } from '@/utils/api/wholeConversation/route'

type MessageListProps = {
  messages: MessageType[]
  isLoading: boolean
}

const MessageList = ({ messages, isLoading }: MessageListProps) => {
  return (
    <div className='mt-16'>
      {messages.map((message, index) => (
        <MessageWrapper
          key={index}
          type={message.type}
          content={message.message}
        >
          {message.type === 'USER' ? (
            <UserMessage content={message.message} />
          ) : (
            <AiMessage content={message.message} />
          )}
        </MessageWrapper>
      ))}

      {isLoading && (
        <MessageWrapper type='AI'>
          <AiMessage content='답변 중...' />
        </MessageWrapper>
      )}
    </div>
  )
}

export default MessageList

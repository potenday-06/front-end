import MessageWrapper, { MessageType } from './MessageWrapper'
import UserMessage from './UserMessage'
import AiMessage from './AiMessage'

type Message = {
  type: MessageType
  content: string
}

type MessageListProps = {
  messages: Message[]
  isLoading: boolean
}

const MessageList = ({ messages, isLoading }: MessageListProps) => {
  return (
    <div className='mt-16'>
      {messages.map((message, index) => (
        <MessageWrapper
          key={index}
          type={message.type}
          content={message.content}
        >
          {message.type === 'user' ? (
            <UserMessage content={message.content} />
          ) : (
            <AiMessage content={message.content} />
          )}
        </MessageWrapper>
      ))}

      {isLoading && (
        <MessageWrapper type='ai'>
          <AiMessage content='답변 중...' />
        </MessageWrapper>
      )}
    </div>
  )
}

export default MessageList

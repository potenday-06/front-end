import MessageWrapper from './MessageWrapper'
import UserMessage from './UserMessage'
import AiMessage from './AiMessage'
import { MessageType } from '@/utils/api/wholeConversation/getWholeConversation'
import { ChatMode } from './Chat'
import { useEffect, useMemo, useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

type MessageListProps = {
  messages: MessageType[]
  isLoading?: boolean
  viewOnly?: boolean
  chatMode?: ChatMode
}

const MessageList = ({
  messages,
  viewOnly,
  chatMode,
  isLoading,
}: MessageListProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const messagesWithTrigger = useMemo(() => {
    const triggerMessage = {
      type: 'AI' as MessageType['type'],
      message: '',
    }

    return [triggerMessage, ...messages]
  }, [messages])

  const messagesCount = messagesWithTrigger.length

  const rowVirtualizer = useVirtualizer({
    count: messagesCount,
    getScrollElement: () => containerRef.current,
    estimateSize: (i) => 35,
    overscan: 3,
  })

  useEffect(() => {
    if (viewOnly) return

    rowVirtualizer.scrollToIndex(messagesCount - 1)
  }, [viewOnly, rowVirtualizer, chatMode, messagesCount])

  const items = rowVirtualizer.getVirtualItems()

  return (
    <main
      ref={containerRef}
      className='flex-1 overflow-auto px-24 [&::-webkit-scrollbar]:hidden'
    >
      <div
        className='relative'
        style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
      >
        {items.map((item) => {
          const message = messagesWithTrigger[item.index]
          return (
            <div
              key={item.key}
              data-index={item.index}
              ref={rowVirtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${item.start}px)`,
              }}
            >
              <MessageWrapper type={message.type} content={message.message}>
                {message.type === 'USER' ? (
                  <UserMessage content={message.message} />
                ) : (
                  <AiMessage content={message.message} />
                )}
              </MessageWrapper>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default MessageList

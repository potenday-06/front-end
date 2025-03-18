import MessageWrapper from './MessageWrapper'
import UserMessage from './UserMessage'
import AiMessage from './AiMessage'
import { MessageType } from '@/utils/api/wholeConversation/getWholeConversation'

import {
  VirtuosoMessageList,
  VirtuosoMessageListLicense,
} from '@virtuoso.dev/message-list'
import { ChatMode } from './Chat'
import useUpdateHeight from '@/hooks/useUpdateHeight'
import useScrollToBottom from '@/hooks/useScrollToBottom'

type MessageListProps = {
  messages: MessageType[]
  isLoading?: boolean
  viewOnly?: boolean
  chatMode?: ChatMode
}

const MessageList = ({ messages, viewOnly, chatMode }: MessageListProps) => {
  const { containerHeight, containerRef } = useUpdateHeight({ chatMode })
  const { virtuoso, messagesWithTrigger } = useScrollToBottom({
    viewOnly,
    messages,
  })

  return (
    <main className='flex flex-1 flex-col overflow-y-hidden p-24'>
      <div ref={containerRef} className='relative flex-1'>
        {containerHeight > 0 && (
          <VirtuosoMessageListLicense licenseKey=''>
            <VirtuosoMessageList
              style={{ height: containerHeight }}
              className='scrollbar-bar-hidden absolute inset-0 [&::-webkit-scrollbar]:hidden'
              ref={virtuoso}
              initialData={messagesWithTrigger}
              ItemContent={({ data }) => (
                <MessageWrapper type={data.type} content={data.message}>
                  {data.type === 'USER' ? (
                    <UserMessage content={data.message} />
                  ) : (
                    <AiMessage content={data.message} />
                  )}
                </MessageWrapper>
              )}
            />
          </VirtuosoMessageListLicense>
        )}
      </div>
    </main>
  )
}

export default MessageList

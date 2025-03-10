import Image from 'next/image'
import { ChatMode } from './Chat'
import AIMessage from './AiMessage'
import MessageList from './MessageList'
import { MessageType } from '@/utils/api/wholeConversation/getWholeConversation'

const ChatMain = ({
  chatMode,
  summary,
  messages,
  isLoading,
}: {
  chatMode: ChatMode
  messages: MessageType[]
  summary: string
  isLoading: boolean
}) => {
  return chatMode === 'end' ? (
    <main className='flex flex-1 flex-col items-center justify-between overflow-y-hidden px-24'>
      <p className='scrollbar-bar-hidden overflow-y-auto text-16-600 [&::-webkit-scrollbar]:hidden'>
        {summary}
      </p>
      <Image
        className='mb-[6svh] mt-24'
        src='/assets/icons/tori-hug-star.svg'
        alt='토리'
        width={91}
        height={112}
      />
    </main>
  ) : (
    <main
      className={`scrollbar-bar-hidden flex-1 overflow-y-auto overflow-x-hidden p-24 pt-48 [&::-webkit-scrollbar]:hidden`}
    >
      <AIMessage />
      <MessageList messages={messages} isLoading={isLoading} />
    </main>
  )
}

export default ChatMain

import AIMessage from '@/app/chat/AiMessage'
import MessageList from '@/app/chat/MessageList'

import {
  MessageType,
  wholeConversation,
} from '@/utils/api/wholeConversation/route'
import { useEffect, useState } from 'react'

const WholeConversation = ({ conversationId }: { conversationId: number }) => {
  const [messages, setMessages] = useState<MessageType[]>([])

  useEffect(() => {
    const fetchWholeConversation = async () => {
      const data = await wholeConversation(conversationId)
      setMessages(data.content)
    }

    fetchWholeConversation()
  }, [])

  return (
    <main className='scrollbar-bar-hidden flex-1 overflow-y-auto pt-48 [&::-webkit-scrollbar]:hidden'>
      <AIMessage />
      <MessageList messages={messages} isLoading={!messages.length} />
    </main>
  )
}

export default WholeConversation

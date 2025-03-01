import MessageList from '@/app/chat/MessageList'
import ChatStarter from '@/components/ChatStarter'
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
    <div className='scrollbar-bar-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden'>
      <ChatStarter />
      <MessageList messages={messages} isLoading={!messages.length} />
    </div>
  )
}

export default WholeConversation

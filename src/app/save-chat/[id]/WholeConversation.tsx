import {
  MessageType,
  wholeConversation,
} from '@/app/api/wholeConversation/route'
import MessageList from '@/app/chat/MessageList'
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
    <div>
      <MessageList messages={messages} isLoading={!messages.length} />
    </div>
  )
}

export default WholeConversation

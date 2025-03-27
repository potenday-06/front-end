import AIMessage from '@/app/chat/AiMessage'
import MessageList from '@/app/chat/MessageList'

import {
  MessageType,
  getWholeConversation,
} from '@/utils/api/wholeConversation/getWholeConversation'
import { useEffect, useState } from 'react'

const WholeConversation = ({ conversationId }: { conversationId: number }) => {
  const [messages, setMessages] = useState<MessageType[]>([])

  useEffect(() => {
    const fetchWholeConversation = async () => {
      const data = await getWholeConversation(conversationId)
      setMessages(data.content)
    }

    fetchWholeConversation()
  }, [])

  return (
    <MessageList messages={messages} isLoading={!messages.length} viewOnly />
  )
}

export default WholeConversation

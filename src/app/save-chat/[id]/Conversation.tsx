'use client'

import { Conversation as ConversationType } from '@/app/api/chatList/route'
import Button from '@/components/Button'
import { Dispatch, SetStateAction } from 'react'

type ConversationProps = {
  conversation: ConversationType
  setSelectedConversation: Dispatch<
    SetStateAction<ConversationType | undefined>
  >
}

const Conversation = ({
  conversation,
  setSelectedConversation,
}: ConversationProps) => {
  const { createdAt } = conversation

  return (
    <Button onClick={() => setSelectedConversation(conversation)}>
      {new Date(createdAt).toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })}
    </Button>
  )
}

export default Conversation

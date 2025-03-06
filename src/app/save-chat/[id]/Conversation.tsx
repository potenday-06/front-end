'use client'

import Button from '@/components/Button'
import { Conversation as ConversationType } from '@/utils/getConversation'
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
    <Button
      type='secondary'
      onClick={() => setSelectedConversation(conversation)}
    >
      {new Date(createdAt).toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })}
    </Button>
  )
}

export default Conversation

'use client'

import Button from '@/components/Button'
import { Conversation as ConversationType } from '@/utils/api/conversation/getConversation'
import { Dispatch, SetStateAction } from 'react'

type ConversationProps = {
  index: number
  conversation: ConversationType
  setSelectedConversation: Dispatch<
    SetStateAction<ConversationType | undefined>
  >
}

const Conversation = ({
  index,
  conversation,
  setSelectedConversation,
}: ConversationProps) => {
  const { createdAt } = conversation

  return (
    <Button
      type='secondary'
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className='flex justify-between px-32'>
        <p>{`${index + 1}번째 대화`}</p>
        <p>
          {new Date(createdAt).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })}
        </p>
      </div>
    </Button>
  )
}

export default Conversation

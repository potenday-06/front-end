'use client'

import Button from '@/components/Button'
import { useState } from 'react'
import WholeConversation from './WholeConversation'
import { Conversation } from '@/utils/getConversation'

const Summary = ({ conversation }: { conversation: Conversation }) => {
  const { summary, conversationId } = conversation
  const [displayWholeConversation, setDisplayWholeConversation] =
    useState(false)

  const handleClick = () => {
    setDisplayWholeConversation(true)
  }

  return displayWholeConversation ? (
    <WholeConversation conversationId={conversationId} />
  ) : (
    <div>
      <p>{summary}</p>
      <Button onClick={handleClick}>대화 내용 전체보기</Button>
    </div>
  )
}

export default Summary

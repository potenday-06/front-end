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
      <p className='text-20-700'>{summary}</p>

      <div className='fixed bottom-0 left-0 right-0 mx-auto max-w-414 p-16'>
        <Button onClick={handleClick}>대화 내용 전체보기</Button>
      </div>
    </div>
  )
}

export default Summary

'use client'

import Button from '@/components/Button'
import { useState } from 'react'
import WholeConversation from './WholeConversation'
import { Conversation } from '@/utils/api/conversation/getConversation'

const Summary = ({
  conversation,
  keywords = [],
}: {
  conversation: Conversation
  keywords: string[]
}) => {
  const { summary, conversationId } = conversation
  const [displayWholeConversation, setDisplayWholeConversation] =
    useState(false)

  return displayWholeConversation ? (
    <WholeConversation conversationId={conversationId} />
  ) : (
    <>
      <main className='scrollbar-bar-hidden flex-1 overflow-y-auto p-24 text-16-500 [&::-webkit-scrollbar]:hidden'>
        {summary}
      </main>

      <ul className='flex flex-wrap items-center gap-12 p-24 pb-0'>
        {keywords.length > 0 &&
          keywords.map((keyword, index) => (
            <li
              key={`${keyword}-${index}`}
              className='flex w-max items-center justify-center rounded-30 border border-white px-16 py-4 text-14-600'
            >
              {keyword}
            </li>
          ))}
      </ul>

      <footer className='p-24'>
        <Button onClick={() => setDisplayWholeConversation(true)}>
          대화 내용 전체보기
        </Button>
      </footer>
    </>
  )
}

export default Summary

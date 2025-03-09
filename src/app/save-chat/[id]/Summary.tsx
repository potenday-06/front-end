'use client'

import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import WholeConversation from './WholeConversation'
import { Conversation } from '@/utils/api/conversation/getConversation'
import { postKeywords } from '@/utils/api/keywords/postKewords'

const Summary = ({ conversation }: { conversation: Conversation }) => {
  const { summary, conversationId } = conversation
  const [displayWholeConversation, setDisplayWholeConversation] =
    useState(false)
  const [keywords, setKeywords] = useState<string[]>([])

  const handleClick = () => {
    setDisplayWholeConversation(true)
  }

  useEffect(() => {
    const getKeywords = async () => {
      const data = await postKeywords(summary)
      const foramttedKeywords = data.result.text
        .replace(/["\\]/g, '')
        .split(',')
        .map((keyword: string) => keyword.trim())

      setKeywords(foramttedKeywords)
    }

    getKeywords()
  }, [])

  return displayWholeConversation ? (
    <WholeConversation conversationId={conversationId} />
  ) : (
    <>
      <main className='scrollbar-bar-hidden flex-1 overflow-y-auto pt-24 text-16-500 [&::-webkit-scrollbar]:hidden'>
        {summary}
      </main>

      <ul className='flex gap-12 py-24'>
        {keywords.map((keyword, index) => (
          <li
            key={`${keyword}-${index}`}
            className='w-max rounded-30 border border-white px-16 py-4 text-14-600'
          >
            {keyword}
          </li>
        ))}
      </ul>
      <footer>
        <Button onClick={handleClick}>대화 내용 전체보기</Button>
      </footer>
    </>
  )
}

export default Summary

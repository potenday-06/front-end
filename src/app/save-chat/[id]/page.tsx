'use client'

import Image from 'next/image'
import Conversation from './Conversation'
import { useEffect, useState } from 'react'
import Summary from './Summary'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import {
  Conversation as ConversationType,
  getConversations,
} from '@/utils/api/conversation/getConversation'
import Link from 'next/link'
import { postKeywords } from '@/utils/api/keywords/postKeywords'
import { instance } from '@/utils/api/instance'

const ChatList = () => {
  const { id } = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()

  const date = searchParams.get('date') || ''

  const [conversations, setConversations] = useState<ConversationType[]>([])
  const [selectedConversation, setSelectedConversation] =
    useState<ConversationType>()
  const [keywords, setKeywords] = useState<string[]>([])

  useEffect(() => {
    const fetchConversations = async () => {
      const data = await getConversations(id as string)

      if (data) {
        setConversations(data?.content)
      }
    }
    fetchConversations()
  }, [])

  useEffect(() => {
    if (!selectedConversation) return

    const generateAndSaveKeywords = async (
      summary: string,
      conversationId: number
    ) => {
      if (!summary) return
      const data = await postKeywords(summary)
      const keywords = data.result.text
      if (keywords) {
        const formattedKeywords = data.result.text
          .replace(/["\\]/g, '')
          .split(',')
          .map((keyword: string) => keyword.trim())
          .slice(0, 3)

        setKeywords(formattedKeywords)

        await instance(
          `v1/conversations/${selectedConversation.conversationId}/keywords`,
          {
            method: 'PATCH',
            body: JSON.stringify({ keywords: formattedKeywords }),
            includeAccessToken: true,
          }
        )
        setConversations((prev) =>
          prev.map((conv) =>
            conv.conversationId === conversationId
              ? { ...conv, keywords: formattedKeywords }
              : conv
          )
        )
      }
    }

    // 선택된 대화의 키워드가 없으면 새로 키워드 생성 api 호출 후 저장
    if (
      !selectedConversation.keywords ||
      selectedConversation.keywords.length === 0 ||
      (selectedConversation.keywords.length === 1 &&
        selectedConversation.keywords[0] === '')
    ) {
      generateAndSaveKeywords(
        selectedConversation.summary,
        selectedConversation.conversationId
      )
    } else {
      setKeywords(selectedConversation.keywords)
    }
  }, [selectedConversation])

  const handleLinkClick = () => {
    if (selectedConversation) {
      setSelectedConversation(undefined)
    } else {
      router.push('/save-chat')
    }
  }

  return (
    <div className='bg-cloud-case1 flex h-svh flex-col'>
      <header className='flex items-start justify-between p-24 pb-0'>
        <button
          onClick={handleLinkClick}
          aria-label='이전 페이지로 돌아가기'
          className='relative mt-4 h-24 w-24 cursor-pointer'
        >
          <Image src='/assets/icons/button-prev-gray.svg' fill alt='' />
        </button>

        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-18'>토리와 대화 내용</h1>
          {date && <h3 className='text-14-500'>{date}</h3>}
        </div>
        <Link
          href='/'
          aria-label='메인 페이지로 돌아가기'
          className='relative mt-6 h-18 w-18'
        >
          <Image
            className='cursor-pointer'
            src='/assets/icons/home.svg'
            alt=''
            fill
          />
        </Link>
      </header>

      {selectedConversation ? (
        <Summary conversation={selectedConversation} keywords={keywords} />
      ) : (
        <ul className='scrollbar-bar-hidden flex flex-col items-center gap-24 overflow-y-auto p-24 [&::-webkit-scrollbar]:hidden'>
          {conversations?.map((conversation, index) => {
            const reversedIndex = conversations.length - 1 - index
            return (
              <Conversation
                index={reversedIndex}
                key={conversation.conversationId}
                conversation={conversation}
                setSelectedConversation={setSelectedConversation}
              />
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ChatList

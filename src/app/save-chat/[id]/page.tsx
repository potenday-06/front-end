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

const ChatList = () => {
  const { id } = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()

  const date = searchParams.get('date') || ''

  const [conversations, setConversations] = useState<ConversationType[]>([])
  const [selectedConversation, setSelectedConversation] =
    useState<ConversationType>()

  useEffect(() => {
    const fetchConversations = async () => {
      const data = await getConversations(id as string)

      if (data) {
        setConversations(data?.content)
      }
    }
    fetchConversations()
  }, [])

  const handleLinkClick = () => {
    if (selectedConversation) {
      setSelectedConversation(undefined)
    } else {
      router.push('/save-chat')
    }
  }

  return (
    <div className='bg-cloud-case1 flex h-full flex-col'>
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
        <Summary conversation={selectedConversation} />
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

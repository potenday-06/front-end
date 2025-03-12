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
      <header className='flex items-baseline justify-between p-24'>
        <Image
          className='cursor-pointer'
          onClick={handleLinkClick}
          src='/assets/icons/button-prev-gray.svg'
          width={24}
          height={24}
          alt='뒤로 가기 버튼'
        />

        <div className='flex flex-col items-center gap-4'>
          <div className='relative h-24 w-116'>
            <Image
              src='/assets/icons/header-summary.svg'
              alt='토리와 대화 내용'
              fill
            />
          </div>
          {date && <h3 className='text-14-500'>{date}</h3>}
        </div>
        <Link href='/' className='relative h-18 w-18'>
          <Image
            className='cursor-pointer'
            src='/assets/icons/home.svg'
            alt='홈 버튼'
            fill
          />
        </Link>
      </header>

      {selectedConversation ? (
        <Summary conversation={selectedConversation} />
      ) : (
        <ul className='scrollbar-bar-hidden flex flex-col items-center gap-24 overflow-y-auto pt-24 [&::-webkit-scrollbar]:hidden'>
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

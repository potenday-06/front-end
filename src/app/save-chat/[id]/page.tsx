'use client'

import Image from 'next/image'
import Conversation from './Conversation'
import { useEffect, useState } from 'react'
import Summary from './Summary'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import {
  Conversation as ConversationType,
  getConversations,
} from '@/utils/getConversation'

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
    <div className='bg-cloud-case1 flex h-full flex-col p-24'>
      <header className='flex items-baseline justify-between'>
        <Image
          className='cursor-pointer'
          onClick={handleLinkClick}
          src='/assets/icons/button-prev-gray.svg'
          width={24}
          height={24}
          alt='뒤로가기'
        />

        <div className='flex flex-col items-center gap-4'>
          <Image
            src='/assets/icons/header-summary.svg'
            width={116}
            height={24}
            alt='헤더'
          />
          {date && <h3 className='text-14-500'>{date}</h3>}
        </div>
        <Image
          className='cursor-pointer'
          onClick={() => router.push('/')}
          src='/assets/icons/exit.svg'
          width={24}
          height={24}
          alt='나가기'
        />
      </header>

      {selectedConversation ? (
        <Summary conversation={selectedConversation} />
      ) : (
        <div className='scrollbar-bar-hidden flex flex-col items-center gap-24 overflow-y-auto pt-24 [&::-webkit-scrollbar]:hidden'>
          {conversations?.map((conversation) => {
            return (
              <Conversation
                key={conversation.conversationId}
                conversation={conversation}
                setSelectedConversation={setSelectedConversation}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ChatList

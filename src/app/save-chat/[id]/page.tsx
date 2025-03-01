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
    <div className='relative flex h-full flex-col px-24 py-38'>
      <header className='mb-46 flex justify-between'>
        <Image
          className='mb-36'
          onClick={handleLinkClick}
          src='/assets/icons/button-prev-gray.svg'
          width={24}
          height={24}
          alt='뒤로가기'
        />

        <div className='flex flex-col items-center'>
          <h1 className='text-24-700'>토리와 대화 내용</h1>
          {date && <p className='text-16-500'>{date}</p>}
        </div>
        <Image
          className='mb-35'
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
        <div className='flex flex-col items-center gap-24'>
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

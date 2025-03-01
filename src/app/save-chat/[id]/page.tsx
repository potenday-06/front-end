'use client'

import {
  Conversation as ConversationType,
  // getConversations,
} from '@/app/api/chatList/route'
import Image from 'next/image'

import Conversation from './Conversation'
import { useEffect, useState } from 'react'
import Summary from './Summary'
import { useParams, useRouter } from 'next/navigation'
import { getConversations } from '@/utils/getConversation'

const ChatList = () => {
  const { id } = useParams()
  const router = useRouter()

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
    <div className='relative flex flex-col justify-between'>
      <header className='flex flex-col items-center'>
        <Image
          onClick={handleLinkClick}
          className='absolute left-[2%]'
          src='/assets/icons/button-prev-gray.svg'
          width={24}
          height={24}
          alt='뒤로가기'
        />

        <h1 className='text-24-700'>
          {'2'}번째 {'서영이'}별 {/**To Do: userName 받아와서 적용*/}
        </h1>
      </header>

      {selectedConversation ? (
        <Summary conversation={selectedConversation} />
      ) : (
        <div className='flex flex-col items-center gap-4'>
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

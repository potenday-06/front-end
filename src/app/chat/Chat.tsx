'use client'

import Image from 'next/image'

import { useState } from 'react'

import MessageList from './MessageList'
import ChatFooter from './ChatFooter'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import ChatSummary from './ChatSummary'
import { saveConversation } from '@/utils/saveConversation'
import { MessageType } from '../api/wholeConversation/route'

export type ChatMode = 'input' | 'choice' | 'end'

const Chat = () => {
  const router = useRouter()
  const [messages, setMessages] = useState<MessageType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [chatMode, setChatMode] = useState<ChatMode>('input')
  const [summary, setSummary] = useState('')

  const onSubmit = async (
    inputMessage: string,
    shouldAddUserMessage = true
  ) => {
    if (shouldAddUserMessage) {
      const newUserMessage: MessageType = {
        type: 'USER',
        message: inputMessage,
      }
      setMessages((prev) => [...prev, newUserMessage])
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputMessage }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('API 호출 실패:', errorText)
        return
      }

      const data = await response.json()

      if (shouldAddUserMessage) {
        const newAiMessage: MessageType = { type: 'AI', message: data.data }
        setMessages((prev) => [...prev, newAiMessage])
        setChatMode('choice')
      } else {
        setSummary(data.data)
        return data.data
      }
    } catch (error) {
      console.error('Fetch 오류:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleMoreTalk = () => {
    setChatMode('input')
  }

  const handleStopTalk = async () => {
    await onSubmit('이제 그만할래', false).then(async (summaryData) => {
      await saveConversation(summaryData, messages)
      setChatMode('end')
    })
  }

  const handleMoveHomePage = () => {
    router.push('/')
  }

  return (
    <div className='h-full'>
      <header className='flex items-center justify-center'>
        {chatMode !== 'end' && (
          <Image
            src='/assets/icons/logo-text.svg'
            alt='텍스트 로고'
            width={51}
            height={28}
          />
        )}
        {chatMode === 'end' && <h1 className='text-24-700'>같이 별 남기기</h1>}
        <Image
          onClick={handleMoveHomePage}
          className='absolute right-[4%] cursor-pointer'
          src='/assets/icons/exit.svg'
          alt='나가기'
          width={24}
          height={24}
        />
      </header>

      {chatMode !== 'end' && (
        <main
          className={`scrollbar-bar-hidden h-[80%] overflow-y-auto [&::-webkit-scrollbar]:hidden`}
        >
          <div className='mt-42 flex items-center gap-16'>
            <Image
              width={72}
              height={72}
              src='/assets/icons/tori-face.svg'
              alt='토리'
            />
            <p className='text-18-600-25'>
              같이 대화해서 좋아!
              <br />
              오늘 기분 어떤지 이야기해줄래?
            </p>
          </div>
          <MessageList messages={messages} isLoading={isLoading} />
        </main>
      )}

      {chatMode === 'end' && (
        <ChatSummary summary={summary} isLoading={isLoading} />
      )}

      <footer>
        {chatMode === 'input' && (
          <ChatFooter onSubmit={onSubmit} isLoading={isLoading} />
        )}
        {chatMode === 'choice' && (
          <div className='absolute bottom-0 left-0 right-0 flex flex-col gap-12 p-24'>
            <Button onClick={handleMoreTalk}>더 얘기할래</Button>
            <Button onClick={handleStopTalk}>그만할래</Button>
          </div>
        )}
        {chatMode === 'end' && (
          <div className='absolute bottom-0 left-0 right-0 p-24'>
            <Button onClick={handleMoveHomePage}>오늘 대화 마치기</Button>
          </div>
        )}
      </footer>
    </div>
  )
}

export default Chat

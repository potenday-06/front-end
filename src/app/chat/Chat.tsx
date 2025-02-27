'use client'

import Image from 'next/image'

import { useState } from 'react'

import MessageList from './MessageList'
import ChatFooter from './ChatFooter'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

type Message = {
  type: 'user' | 'ai'
  content: string
}

type ChatMode = 'input' | 'choice' | 'end'

const Chat = () => {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [chatMode, setChatMode] = useState<ChatMode>('input')

  const onSubmit = async (inputMessage: string) => {
    // 유저 메시지
    const newUserMessage: Message = { type: 'user', content: inputMessage }
    setMessages((prev) => [...prev, newUserMessage])

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

      const newAiMessage: Message = { type: 'ai', content: data.data }
      setMessages((prev) => [...prev, newAiMessage])

      setChatMode('choice')
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
    setChatMode('end')

    // TODO: 대화 요약 로직 API 호출
  }

  const handleMoveHomePage = () => {
    router.push('/')
  }

  return (
    <div className='h-full'>
      <header className='flex justify-center'>
        <Image
          src='/assets/icons/logo-text.svg'
          alt='텍스트 로고'
          width={51}
          height={28}
        />
      </header>

      <main className='h-[90%] overflow-y-scroll'>
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

      <footer>
        {chatMode === 'input' && (
          <ChatFooter onSubmit={onSubmit} isLoading={isLoading} />
        )}
        {chatMode === 'choice' && (
          <div className='absolute bottom-0 left-0 right-0 flex flex-col gap-4 p-12'>
            <Button onClick={handleMoreTalk}>더 얘기할래</Button>
            <Button onClick={handleStopTalk}>그만할래</Button>
          </div>
        )}
        {chatMode === 'end' && (
          <div className='absolute bottom-0 left-0 right-0'>
            <Button onClick={handleMoveHomePage}>오늘 대화 마치기</Button>
          </div>
        )}
      </footer>
    </div>
  )
}

export default Chat

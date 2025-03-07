'use client'

import Image from 'next/image'

import { useEffect, useState } from 'react'

import MessageList from './MessageList'
import ChatFooter from './ChatFooter'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import ChatSummary from './ChatSummary'
import { postConversation } from '@/utils/api/conversation/postConversation'
import { MessageType } from '@/utils/api/wholeConversation/getWholeConversation'

import AIMessage from './AiMessage'

export type ChatMode = 'input' | 'choice' | 'end'

const Chat = () => {
  const router = useRouter()
  const [messages, setMessages] = useState<MessageType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    setIsSubmitted(true)

    try {
      // 요약 API 호출
      const response = await fetch('/api/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('요약 API 호출 실패:', errorText)
        return
      }

      const { data: summaryData } = await response.json()

      // 요약된 데이터 DB 저장
      await postConversation(messages, summaryData)

      setSummary(summaryData)
      setChatMode('end') // 요약 화면으로 UI 변경
    } catch (error) {
      console.error('Fetch 오류:', error)
    } finally {
      setIsSubmitted(false)
    }
  }

  const handleMoveHomePage = () => {
    router.push('/')
    router.refresh()
  }

  useEffect(
    function scrollToBottom() {
      const header = document.getElementsByTagName('header')[0]
      const footerElement = document.getElementsByTagName('footer')[0]
        .firstChild as HTMLElement
      const main = document.getElementsByTagName('main')[0]

      if (main && header && footerElement) {
        const mainHeight = `calc(100% - ${header.scrollHeight}px - ${footerElement.scrollHeight}px)`
        main.style.height = mainHeight
        main.scrollTop = main.scrollHeight
      }
    },
    [chatMode]
  )

  return (
    <div className='bg-cloud-case1 flex h-svh flex-col'>
      <header className='flex items-center justify-center p-24'>
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
          src='/assets/icons/home.svg'
          alt='홈 버튼'
          width={18}
          height={18}
        />
      </header>

      {chatMode !== 'end' && (
        <main
          className={`scrollbar-bar-hidden flex-1 overflow-y-auto overflow-x-hidden p-24 pt-48 [&::-webkit-scrollbar]:hidden`}
        >
          <AIMessage />
          <MessageList messages={messages} isLoading={isLoading} />
        </main>
      )}
      {chatMode === 'end' && (
        <main className='flex flex-1 flex-col items-center justify-between overflow-y-hidden px-24'>
          <ChatSummary summary={summary} />
          <Image
            className='mt-24'
            src='/assets/icons/tori-hug-star.svg'
            alt='토리'
            width={91}
            height={112}
          />
        </main>
      )}

      <footer>
        {chatMode === 'input' && (
          <ChatFooter onSubmit={onSubmit} isLoading={isLoading} />
        )}
        {chatMode === 'choice' && (
          <div className='flex flex-col gap-12 p-24'>
            <Button onClick={handleMoreTalk}>더 얘기할래</Button>
            <Button
              color='bg-purple-10'
              disabled={isSubmitted}
              onClick={handleStopTalk}
            >
              {isSubmitted ? '대화 요약 중...' : '그만할래'}
            </Button>
          </div>
        )}
        {chatMode === 'end' && (
          <div className='p-24'>
            <Button onClick={handleMoveHomePage}>오늘 대화 마치기</Button>
          </div>
        )}
      </footer>
    </div>
  )
}

export default Chat

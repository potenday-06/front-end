'use client'

import { useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { postConversation } from '@/utils/api/conversation/postConversation'
import { MessageType } from '@/utils/api/wholeConversation/getWholeConversation'

import Lottie from 'lottie-react'
import chatEndAnimation from '../../../public/assets/animation/chat-end.json'
import { postMessage } from '@/utils/api/chat/postMessage'
import { postSummary } from '@/utils/api/chat/postSummary'
import ChatHeader from './ChatHeader'
import ChatMain from './ChatMain'
import ChatFooter from './ChatFooter'

export type ChatMode = 'input' | 'choice' | 'end'

const Chat = () => {
  const router = useRouter()
  const [messages, setMessages] = useState<MessageType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [chatMode, setChatMode] = useState<ChatMode>('input')
  const [summary, setSummary] = useState('')
  const [showAnimation, setShowAnimation] = useState(false)

  const onSubmit = async (inputMessage: string) => {
    const newUserMessage: MessageType = {
      type: 'USER',
      message: inputMessage,
    }
    setMessages((prev) => [...prev, newUserMessage])

    setIsLoading(true)
    const message = await postMessage(inputMessage)

    const newAiMessage: MessageType = { type: 'AI', message }
    setMessages((prev) => [...prev, newAiMessage])
    setChatMode('choice')

    setIsLoading(false)
  }

  const handleChatStopAndSave = async () => {
    setIsSubmitted(true)
    let summaryData = await postSummary(messages)

    // 요약 내용에 "AI:" 가 포함돼있으면 제거
    summaryData = summaryData.replace(/AI:\s*/g, '')

    // 요약된 데이터 DB 저장
    await postConversation(messages, summaryData)

    setSummary(summaryData)
    setChatMode('end') // 요약 화면으로 UI 변경
    setIsSubmitted(false)
  }

  const handleMoveHomePage = useCallback(() => {
    router.push('/')
    router.refresh()
  }, [router])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (showAnimation) {
      timer = setTimeout(() => {
        handleMoveHomePage()
      }, 3000)
    }

    return () => clearTimeout(timer)
  }, [showAnimation, router, handleMoveHomePage])

  if (showAnimation)
    return (
      <Lottie
        animationData={chatEndAnimation}
        loop={false}
        className='absolute bottom-0 left-0 right-0 z-[9999] overflow-y-hidden'
      />
    )

  return (
    <div className='bg-cloud-case1 flex h-svh flex-col'>
      <ChatHeader chatMode={chatMode} />
      <ChatMain
        chatMode={chatMode}
        summary={summary}
        messages={messages}
        isLoading={isLoading}
      />

      <ChatFooter
        chatMode={chatMode}
        setChatMode={setChatMode}
        onSubmit={onSubmit}
        isLoading={isLoading}
        disabled={isSubmitted}
        setShowAnimation={setShowAnimation}
        handleChatStopAndSave={handleChatStopAndSave}
      />
    </div>
  )
}

export default Chat

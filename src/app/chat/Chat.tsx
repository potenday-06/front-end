import Image from 'next/image'
import { UserInfo } from './page'

import { useState } from 'react'

import MessageList from './MessageList'
import ChatInput from './ChatInput'

type Message = {
  type: 'user' | 'ai'
  content: string
}

const Chat = ({ userName }: Pick<UserInfo, 'userName'>) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

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
    } catch (error) {
      console.error('Fetch 오류:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <header className='flex justify-center'>
        <Image
          src='/assets/icons/logo-text.svg'
          alt='텍스트 로고'
          width={51}
          height={28}
        />
      </header>

      <main>
        <div className='mt-42 flex items-center gap-16'>
          <Image
            width={72}
            height={72}
            src='/assets/icons/tori-face.svg'
            alt='토리'
          />
          <p className='text-18-600-25'>
            {userName}랑 놀아서 신나!
            <br />
            오늘 기분 어떤지 이야기해줄래?
          </p>
        </div>
        <MessageList messages={messages} isLoading={isLoading} />
      </main>

      <footer>
        <ChatInput onSubmit={onSubmit} isLoading={isLoading} />
      </footer>
    </div>
  )
}

export default Chat

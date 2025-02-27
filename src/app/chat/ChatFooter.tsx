import { useState } from 'react'
import Button from '@/components/Button'
import Footer from '@/components/Footer'

type ChatFooterProps = {
  onSubmit: (message: string) => void
  isLoading: boolean
}

const ChatFooter = ({ onSubmit, isLoading }: ChatFooterProps) => {
  const [userInput, setUserInput] = useState('')

  const handleSubmit = () => {
    if (!userInput.trim()) return
    onSubmit(userInput)
    setUserInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <Footer type='chat'>
      <div className='flex flex-1'>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='어떤 기분인지 알려줘'
          className='flex-1 resize-none rounded-8 bg-gray-10 p-16'
        />
      </div>
      <div className='mt-20'>
        <Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? '전송 중...' : '알려주기'}
        </Button>
      </div>
    </Footer>
  )
}

export default ChatFooter

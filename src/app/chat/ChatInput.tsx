import { useState } from 'react'
import Button from '@/components/Button'

type ChatInputProps = {
  onSubmit: (message: string) => void
  isLoading: boolean
}

const ChatInput = ({ onSubmit, isLoading }: ChatInputProps) => {
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
    <div className='fixed bottom-0 left-0 right-0 h-[20%] rounded-t-10 bg-white px-24 py-20 text-center text-black-10'>
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
    </div>
  )
}

export default ChatInput

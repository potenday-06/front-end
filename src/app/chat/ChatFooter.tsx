import { useState } from 'react'
import Button from '@/components/Button'
import Footer from '@/components/Footer'

type ChatFooterProps = {
  onSubmit: (message: string) => void
  isLoading: boolean
}

const ChatFooter = ({ onSubmit, isLoading }: ChatFooterProps) => {
  const [userInput, setUserInput] = useState('')
  const [isComposing, setIsComposing] = useState(false)

  const handleSubmit = () => {
    if (!userInput.trim()) return
    onSubmit(userInput)
    setUserInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      e.stopPropagation()

      if (!userInput.trim() || isComposing) return

      handleSubmit()
    }
  }

  return (
    <Footer type='chat'>
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        placeholder='편하게 남겨줘'
        className='mb-16 h-110 resize-none rounded-8 bg-gray-10 p-16'
      />
      <Button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? '전송 중...' : '알려주기'}
      </Button>
    </Footer>
  )
}

export default ChatFooter

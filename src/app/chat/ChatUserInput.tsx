import { useEffect, useRef, useState } from 'react'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import useCheckMobileDevice from '@/hooks/useCheckMobileDevice'

type ChatUserInputProps = {
  onSubmit: (message: string) => void
  isLoading: boolean
}

const ChatUserInput = ({ onSubmit, isLoading }: ChatUserInputProps) => {
  const [userInput, setUserInput] = useState('')
  const [isComposing, setIsComposing] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const isMobile = useCheckMobileDevice()

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  const handleSubmit = () => {
    if (!userInput.trim()) return
    onSubmit(userInput)
    setUserInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isMobile) return

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
        ref={textareaRef}
        value={userInput}
        tabIndex={2}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        placeholder='편하게 남겨줘'
        className='mb-16 h-110 resize-none rounded-8 bg-gray-10 p-16'
      />
      <Button tabIndex={3} onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? '전송 중...' : '알려주기'}
      </Button>
    </Footer>
  )
}

export default ChatUserInput

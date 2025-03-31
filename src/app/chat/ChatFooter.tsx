import Button from '@/components/Button'
import ChatUserInput from './ChatUserInput'
import { ChatMode } from './Chat'
import { Dispatch, SetStateAction } from 'react'
import { sendEndChatNotification } from '@/utils/firebaseCloudMessaging/sendNotification'

interface ChatFooterProps {
  chatMode: ChatMode
  setChatMode: Dispatch<SetStateAction<ChatMode>>
  onSubmit: (inputMessage: string) => Promise<void>
  disabled: boolean
  isLoading: boolean
  setShowAnimation: Dispatch<SetStateAction<boolean>>
  handleChatStopAndSave: () => Promise<void>
}

const ChatFooter = ({
  chatMode,
  setChatMode,
  onSubmit,
  disabled,
  isLoading,
  setShowAnimation,
  handleChatStopAndSave,
}: ChatFooterProps) => {
  const handleEndChat = async () => {
    try {
      const userId = localStorage.getItem('userId')

      if (userId) {
        // push 알림 전송
        await sendEndChatNotification(userId)
      }

      setShowAnimation(true)
    } catch (error) {
      console.error('push 알림 전송 오류:', error)
      setShowAnimation(true)
    }
  }

  return (
    <footer>
      {chatMode === 'input' && (
        <ChatUserInput onSubmit={onSubmit} isLoading={isLoading} />
      )}
      {chatMode === 'choice' && (
        <div className='flex flex-col gap-12 p-24'>
          <Button onClick={() => setChatMode('input')}>더 얘기할래</Button>
          <Button
            color='bg-purple-10'
            disabled={disabled}
            onClick={handleChatStopAndSave}
          >
            {disabled ? '대화 요약 중...' : '그만할래'}
          </Button>
        </div>
      )}
      {chatMode === 'end' && (
        <div className='p-24'>
          <Button onClick={handleEndChat}>오늘 대화 마치기</Button>
        </div>
      )}
    </footer>
  )
}

export default ChatFooter

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useCallback } from 'react'
import { ChatMode } from './Chat'

const ChatHeader = ({ chatMode }: { chatMode: ChatMode }) => {
  const router = useRouter()

  const handleMoveHomePage = useCallback(() => {
    router.push('/')
    router.refresh()
  }, [router])

  return (
    <header className='flex items-center justify-center p-24'>
      {chatMode !== 'end' && (
        <Image
          src='/assets/icons/logo-text.svg'
          alt='텍스트 로고'
          width={51}
          height={28}
        />
      )}
      {chatMode === 'end' && (
        <Image
          src='/assets/icons/header-chat-end.svg'
          alt='헤더'
          width={99}
          height={25}
        />
      )}
      <Image
        onClick={handleMoveHomePage}
        className='absolute right-[4%] cursor-pointer'
        src='/assets/icons/home.svg'
        alt='홈 버튼'
        width={18}
        height={18}
      />
    </header>
  )
}

export default ChatHeader

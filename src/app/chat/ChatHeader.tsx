import Image from 'next/image'

import { ChatMode } from './Chat'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ChatHeader = ({ chatMode }: { chatMode: ChatMode }) => {
  const router = useRouter()

  return (
    <header className='flex items-center justify-between p-24'>
      {chatMode === 'end' ? (
        <>
          <div className='h-18 w-18' />
          <Image
            src='/assets/icons/header-chat-end.svg'
            alt='같이 별 남기기'
            width={99}
            height={25}
          />
        </>
      ) : (
        <>
          <div className='h-18 w-18' />
          <Image
            src='/assets/icons/logo-text.svg'
            alt='토리별 텍스트 로고'
            width={51}
            height={28}
          />
        </>
      )}

      <Link href='/' className='relative h-18 w-18 cursor-pointer'>
        <Image
          onClick={() => router.refresh()}
          fill
          src='/assets/icons/home.svg'
          alt='홈 버튼'
          tabIndex={1}
        />
      </Link>
    </header>
  )
}

export default ChatHeader

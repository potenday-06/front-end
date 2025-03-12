import Image from 'next/image'

import { ChatMode } from './Chat'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ChatHeader = ({ chatMode }: { chatMode: ChatMode }) => {
  const router = useRouter()

  return (
    <header className='flex items-center justify-between p-24 pb-0'>
      {chatMode === 'end' ? (
        <>
          <div className='h-18 w-18' />
          <div className='relative h-25 w-99'>
            <Image
              src='/assets/icons/header-chat-end.svg'
              alt='같이 별 남기기'
              fill
            />
          </div>
        </>
      ) : (
        <>
          <div className='h-18 w-18' />
          <div className='relative h-28 w-51'>
            <Image src='/assets/icons/logo-text.svg' alt='토리별 로고' fill />
          </div>
        </>
      )}

      <Link href='/' className='relative h-18 w-18 cursor-pointer'>
        <Image
          onClick={() => router.refresh()}
          src='/assets/icons/home.svg'
          alt='홈 버튼'
          tabIndex={1}
          fill
        />
      </Link>
    </header>
  )
}

export default ChatHeader

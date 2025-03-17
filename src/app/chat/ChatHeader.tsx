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
          <h1 className='text-18'>같이 별 남기기</h1>
        </>
      ) : (
        <>
          <div className='h-18 w-18' />
          <h1 className='text-18'>토리별</h1>
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

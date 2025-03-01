import Button from '@/components/Button'
import { getUserInfo } from '@/utils/api/userInfo/route'

import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const userInfo = (await getUserInfo()).data

  return (
    <div className='bg-cloud-case2 relative flex min-h-svh flex-col justify-between p-24'>
      <header className='flex items-center justify-center'>
        <Image
          src='/assets/icons/logo-text.svg'
          alt='텍스트 로고'
          width={51}
          height={28}
        />
        <Link
          href='/setting'
          className='absolute right-[5%] h-24 w-24 cursor-pointer'
        >
          <Image src='/assets/icons/setting.svg' alt='설정' fill />
        </Link>
      </header>

      <main className='flex flex-1 flex-col items-center justify-center'>
        <p className='text-center text-18-600-30'>
          오늘은 {today}이야
          <br />
          어떤 하루를 보냈어?
        </p>
      </main>
      <Image
        className='absolute left-1/2 top-[60%] -translate-x-1/2'
        src='/assets/icons/tori-login.svg'
        width={96}
        height={116}
        alt='토리'
        priority
      />

      <div className='flex flex-col gap-12'>
        <Link
          href={userInfo?.createdAt ? '/chat' : 'chat/onboarding'}
          className='flex flex-col items-center gap-12'
        >
          <Button>토리와 이야기 시작하기</Button>
        </Link>
        <Link href='save-chat'>
          <Button color='bg-purple-10'>우리가 만든 우주 보러가기</Button>
        </Link>
      </div>
    </div>
  )
}

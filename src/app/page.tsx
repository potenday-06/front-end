import Button from '@/components/Button'
import { getUserInfo } from '@/utils/api/userInfo/getUserInfo'

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
    <div className='bg-cloud-main relative flex min-h-svh flex-col justify-between p-24'>
      <header className='flex items-center justify-between'>
        <div className='h-24 w-24' />
        <h1 className='text-18'>토리별</h1>
        <Link
          href='/setting'
          aria-label='설정 페이지로 이동'
          className='relative h-24 w-24 cursor-pointer'
        >
          <Image src='/assets/icons/setting.svg' alt='' fill />
        </Link>
      </header>

      <main className='flex flex-1 flex-col items-center justify-center'>
        <div className='text-16-500-28 pb-[40%] text-center'>
          <div className='flex items-center'>
            <p>오늘은&nbsp;</p>
            <p className='text-16-600-28'>{today}</p>
            <p>이야</p>
          </div>
          <p>어떤 하루를 보냈어?</p>
        </div>
      </main>
      <div className='flex justify-center'>
        <Image
          src='/assets/icons/tori-main.svg'
          width={96}
          height={116}
          alt='토리'
          priority
        />
      </div>

      <footer className='flex flex-col gap-12 pt-52'>
        <Link
          tabIndex={-1}
          href={!userInfo.nickname ? 'chat/onboarding' : '/chat'}
          className='flex flex-col items-center gap-12'
        >
          <Button type='secondary'>토리와 이야기 시작하기</Button>
        </Link>
        <Link tabIndex={-1} href='save-chat'>
          <Button color='bg-purple-10'>우리가 만든 우주 보러가기</Button>
        </Link>
      </footer>
    </div>
  )
}

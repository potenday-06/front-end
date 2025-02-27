import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <div className='relative flex min-h-screen flex-col justify-between p-33'>
      <header className='flex justify-center'>
        <Image
          src='/assets/icons/logo-text.svg'
          alt='텍스트 로고'
          width={51}
          height={28}
        />
      </header>
      <main className='flex flex-1 flex-col items-center justify-center'>
        <p className='text-center text-20-700'>
          아직 우리가 대화해서 만든 별이 없어
          <br />
          대화를 저장하면 내가 별로 만들어줄게!
          <br />그 별이 모여 서영이의 우주가 될거야
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

      <Link
        href='/chat'
        className='rounded-30 bg-purple-30 py-14 text-center text-18-600'
      >
        토리와 이야기 시작하기
      </Link>
    </div>
  )
}

export default Main

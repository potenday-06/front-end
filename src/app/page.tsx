import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-cloud-case2 relative flex min-h-screen flex-col justify-between p-24'>
      <header className='flex items-center justify-center'>
        <Image
          src='/assets/icons/logo-text.svg'
          alt='텍스트 로고'
          width={51}
          height={28}
        />
        <Link
          href='/setting'
          className='fixed right-[5%] h-24 w-24 cursor-pointer'
        >
          <Image src='/assets/icons/setting.svg' alt='설정' fill />
        </Link>
      </header>

      <main className='flex flex-1 flex-col items-center justify-center'>
        <p className='text-center text-18-600-30'>
          아직 우리가 대화해서 만든 별이 없어
          <br />
          대화를 저장하면 내가 별로 만들어줄게!
          <br />그 별이 모여 우주가 될거야
        </p>
        {/**To Do: 이미 토리와 나눈 저장해둔 대화가 있는 사용자는 멘트 "Ex. 서영아 오늘 하루는 어땠어?" 보여줘야함 */}
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
        href='chat/onboarding'
        className='flex flex-col items-center gap-12'
      >
        <Button>토리와 이야기 시작하기</Button>
      </Link>
      {/**To Do: 이전에 이미 토리와 나눈 저장해둔 대화가 있다면 "나만의 우주 보러가기" 버튼 생성 */}
    </div>
  )
}

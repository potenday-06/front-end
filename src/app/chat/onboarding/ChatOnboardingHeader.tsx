import Image from 'next/image'
import Link from 'next/link'

const ChatOnboardingHeader = ({
  step,
  onPrev,
}: {
  step: number
  onPrev?: () => void
}) => {
  const progressBarSrc = `/assets/icons/progress-bar-${step}.svg`

  return (
    <>
      {step !== 4 ? (
        <header className='flex items-center justify-between p-24'>
          <button
            onClick={onPrev}
            aria-label='뒤로 돌아가기 버튼'
            className='relative h-24 w-24 cursor-pointer'
          >
            <Image fill src='/assets/icons/button-prev-gray.svg' alt='' />
          </button>
          <Image
            className='ml-auto'
            width={289}
            height={32}
            src={progressBarSrc}
            alt='상태 바'
          />
          <div className='h-16 w-16' />
        </header>
      ) : (
        <header className='flex justify-end p-24'>
          <Link
            href='/'
            aria-label='메인 페이지로 돌아가기'
            className='relative h-18 w-18 cursor-pointer'
          >
            <Image fill src='/assets/icons/home.svg' alt='' />
          </Link>
        </header>
      )}
    </>
  )
}

export default ChatOnboardingHeader

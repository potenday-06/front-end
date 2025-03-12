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
          <Image
            onClick={onPrev}
            className='cursor-pointer'
            width={24}
            height={24}
            src='/assets/icons/button-prev-gray.svg'
            alt='뒤로가기'
            tabIndex={1}
          />
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
          <Link href='/' className='relative h-18 w-18 cursor-pointer'>
            <Image fill src='/assets/icons/home.svg' alt='홈 버튼' />
          </Link>
        </header>
      )}
    </>
  )
}

export default ChatOnboardingHeader

import ProgressBar from '@/components/ProgressBar'
import Image from 'next/image'
import Link from 'next/link'

const ChatOnboardingHeader = ({
  step,
  onPrev,
}: {
  step: number
  onPrev?: () => void
}) => {
  return (
    <>
      {step !== 4 ? (
        <header className='flex items-center justify-between p-24'>
          <button
            onClick={onPrev}
            aria-label='뒤로 돌아가기 버튼'
            className='relative mr-auto h-24 w-24 cursor-pointer'
          >
            <Image fill src='/assets/icons/button-prev-gray.svg' alt='' />
          </button>

          <ProgressBar step={step} />
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

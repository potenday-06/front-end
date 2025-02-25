import Image from 'next/image'
import Link from 'next/link'

const OnboardingStep2 = () => {
  return (
    <div className='relative min-h-screen px-24 pt-38'>
      <div className='flex justify-center'>
        <Image
          width={289}
          height={32}
          src='/assets/icons/progress-bar-2.svg'
          alt='상태바'
        />
      </div>

      <Image
        className='absolute bottom-1/3 left-1/2 -translate-x-1/2'
        width={92}
        height={106}
        src='/assets/icons/tori-hug-star.svg'
        alt='토리'
      />

      <div className='fixed bottom-0 left-0 right-0 flex h-[30%] flex-col justify-between gap-31 rounded-t-10 bg-white px-24 pb-48 pt-38 text-center text-black-10'>
        <span className='text-20-500'>
          <p>우리 대화가 끝나면 토리가 별로 만들거야.</p>
          <span className='flex justify-center'>
            <p className='text-20-700'>소중한 마음을&nbsp;</p> 우주에 가득
            담아보자
          </span>
        </span>
        <span className='flex justify-between'>
          <Link href='/onboarding' className='relative h-48 w-48'>
            <Image
              fill
              src='/assets/icons/button-previous.svg'
              alt='이전 버튼'
            />
          </Link>
          <Link href='/onboarding/step3' className='relative h-48 w-48'>
            <Image fill src='/assets/icons/button-next.svg' alt='다음 버튼' />
          </Link>
        </span>
      </div>
    </div>
  )
}

export default OnboardingStep2

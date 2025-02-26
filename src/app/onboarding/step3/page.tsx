import Image from 'next/image'
import Link from 'next/link'

const OnboardingStep3 = () => {
  return (
    <div className='relative min-h-screen px-24 pt-38'>
      <div className='flex justify-center'>
        <Image
          width={289}
          height={32}
          src='/assets/icons/progress-bar-3.svg'
          alt='상태바'
        />
      </div>

      <Image
        className='absolute left-1/2 top-[18%] -translate-x-1/2'
        width={146}
        height={136}
        src='/assets/icons/star-with-ring.svg'
        alt='별'
      />
      <Image
        className='absolute left-1/2 top-[45%] -translate-x-1/2'
        width={103}
        height={103}
        src='/assets/icons/star.svg'
        alt='별'
      />

      <div className='fixed bottom-0 left-0 right-0 flex h-[30%] flex-col justify-between gap-31 rounded-t-10 bg-white px-24 pb-48 pt-38 text-center text-black-10'>
        <div className='text-20-500'>
          만든 별을 우주에서 다시 볼 수 있어.
          <br />
          어떤 이야기와 감정을 느꼈는지 알 수 있지
          <br />
          <span className='flex justify-center'>
            <p className='text-20-700'>우리의 감정은 소중하니까,&nbsp;</p> 잘
            부탁해!
          </span>
        </div>

        <Link
          href='/login'
          className='rounded-24 bg-purple-30 py-13 text-18-600 text-white'
        >
          시작하기
        </Link>
      </div>
    </div>
  )
}

export default OnboardingStep3

'use client'

import Image from 'next/image'
import { OnboardingPageProps } from './Step1'
import Footer from '@/components/Footer'

const StepTwo = ({ onPrev, onNext }: OnboardingPageProps) => {
  return (
    <div>
      <Image
        className='absolute left-1/2 top-1/2 -translate-x-1/2'
        width={92}
        height={106}
        src='/assets/icons/tori-hug-star.svg'
        alt='토리'
      />

      <Footer type='onboarding'>
        <span className='text-20-500'>
          <p>우리 대화가 끝나면 토리가 별로 만들거야.</p>
          <span className='flex justify-center'>
            <p className='text-20-700'>소중한 마음을&nbsp;</p> 우주에 가득
            담아보자
          </span>
        </span>
        <span className='flex justify-between'>
          <Image
            className='cursor-pointer'
            onClick={onPrev}
            width={48}
            height={48}
            src='/assets/icons/button-previous.svg'
            alt='이전 버튼'
          />

          <Image
            className='cursor-pointer'
            onClick={onNext}
            width={48}
            height={48}
            src='/assets/icons/button-next.svg'
            alt='다음 버튼'
          />
        </span>
      </Footer>
    </div>
  )
}

export default StepTwo

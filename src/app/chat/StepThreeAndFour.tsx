'use client'

import Image from 'next/image'
import { MainPageProps } from './StepOneAndTwo'
import Button from '@/components/Button'

type StepThreeAndFourProps = {
  userName: string
  userAge: number
  gender?: string
  onNext: () => void
  onGenderSelect?: (gender: 'male' | 'female') => void
  isCompletionStep?: boolean
}

const StepThreeAndFour = ({
  onGenderSelect,
  isCompletionStep,
  userName,
  userAge,
  gender,
  onNext,
}: StepThreeAndFourProps) => {
  const step = isCompletionStep ? 4 : 3

  return (
    <div>
      <div className='mb-62 flex justify-center'>
        {step === 3 && (
          <Image
            width={289}
            height={32}
            src='/assets/icons/progress-bar-3.svg'
            alt='상태바'
          />
        )}
      </div>

      <span className='text-20-700'>
        {step === 3 && (
          <>
            <p>우와!</p>
            <p>
              {userName}이는 {userAge}살이구나.
            </p>
            <p>{userName}이는 남자야? 여자야?</p>
          </>
        )}

        {step === 4 && (
          <>
            <p>{`안녕 ${userName}아.`}</p>
            <p>{`${userName}이는 ${userAge}살이고, 여자구나`} </p>
            <p>내가 잘 기억할게</p>
            <br />
            <p>내 이름은 토리야!</p>
            <p>만나서 반가워</p>
          </>
        )}
      </span>
      {step === 4 && (
        <Image
          className='absolute left-1/2 top-[60%] -translate-x-1/2'
          src='/assets/icons/tori-cute.svg'
          width={96}
          height={116}
          alt='토리'
          priority
        />
      )}
      {step === 3 && (
        <footer className='fixed bottom-0 left-1/2 mb-48 flex w-full -translate-x-1/2 flex-col gap-12 px-24'>
          {onGenderSelect && (
            <Button onClick={() => onGenderSelect('male')}>나는 남자야</Button>
          )}
          {onGenderSelect && (
            <Button onClick={() => onGenderSelect('female')}>
              나는 여자야
            </Button>
          )}
        </footer>
      )}
      {step === 4 && (
        <footer className='fixed bottom-0 left-1/2 mb-48 flex w-full -translate-x-1/2 flex-col gap-12 px-24'>
          <Button onClick={onNext}>시작하기</Button>
        </footer>
      )}
    </div>
  )
}

export default StepThreeAndFour

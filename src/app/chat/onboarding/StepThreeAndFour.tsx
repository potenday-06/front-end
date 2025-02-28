'use client'

import Image from 'next/image'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { postUserInfo } from '@/utils/userInfo'

type StepThreeAndFourProps = {
  nickname: string
  age: number
  gender?: 'MALE' | 'FEMALE'
  onPrev?: () => void
  onNext?: () => void
  onGenderSelect?: (gender: 'MALE' | 'FEMALE') => void
  isCompletionStep?: boolean
}

const StepThreeAndFour = ({
  onPrev,
  onGenderSelect,
  isCompletionStep,
  nickname,
  age,
  gender,
}: StepThreeAndFourProps) => {
  const step = isCompletionStep ? 4 : 3
  const router = useRouter()

  const handleStartChat = async () => {
    await postUserInfo({ nickname, age, gender: gender ?? 'MALE' })

    // 채팅 시작 페이지로 이동
    router.push('/chat')
  }

  return (
    <div>
      {step === 4 && (
        <Link href='/' className='absolute right-[4%] h-24 w-24 cursor-pointer'>
          <Image fill src='/assets/icons/exit.svg' alt='나가기' />
        </Link>
      )}
      <div className='mb-62 flex justify-center'>
        {step === 3 && (
          <>
            <Image
              onClick={onPrev}
              className='absolute left-[4%] cursor-pointer'
              width={24}
              height={24}
              src='/assets/icons/button-prev-gray.svg'
              alt='뒤로가기'
            />
            <Image
              width={289}
              height={32}
              src='/assets/icons/progress-bar-3.svg'
              alt='상태바'
            />
          </>
        )}
      </div>

      <span className='text-20-700'>
        {step === 3 && (
          <>
            <p>우와! {age}살이구나.</p>
            <p>남자야? 여자야?</p>
          </>
        )}

        {step === 4 && (
          <>
            <p>고마워 내가 잘 기억할게</p>
            <br />
            <p>내 이름은 토리야</p>
            <p>만나서 반가워!</p>
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
        <footer className='absolute bottom-0 left-1/2 mb-48 flex w-full -translate-x-1/2 flex-col gap-12 px-24'>
          {onGenderSelect && (
            <Button onClick={() => onGenderSelect('MALE')}>나는 남자야</Button>
          )}
          {onGenderSelect && (
            <Button onClick={() => onGenderSelect('FEMALE')}>
              나는 여자야
            </Button>
          )}
        </footer>
      )}
      {step === 4 && (
        <footer className='absolute bottom-0 left-1/2 mb-48 flex w-full -translate-x-1/2 flex-col gap-12 px-24'>
          <Button onClick={handleStartChat}>시작하기</Button>
        </footer>
      )}
    </div>
  )
}

export default StepThreeAndFour

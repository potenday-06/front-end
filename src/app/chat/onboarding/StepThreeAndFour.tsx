'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

import { postUserInfo } from '@/utils/userInfo'
import ChatOnboardingDescription from './ChatOnboardingDescription'
import ChatOnboardingHeader from './ChatOnboardingHeader'

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
    <>
      <ChatOnboardingHeader step={step} onPrev={onPrev} />

      <ChatOnboardingDescription step={step} age={age} />

      {step === 3 && (
        <footer className='flex w-full flex-col gap-12 p-24'>
          {onGenderSelect && (
            <>
              <Button onClick={() => onGenderSelect('MALE')}>
                나는 남자야
              </Button>
              <Button onClick={() => onGenderSelect('FEMALE')}>
                나는 여자야
              </Button>
            </>
          )}
        </footer>
      )}
      {step === 4 && (
        <footer className='w-full p-24'>
          <Button onClick={handleStartChat}>시작하기</Button>
        </footer>
      )}
    </>
  )
}

export default StepThreeAndFour

'use client'

import { ChangeEvent, useState } from 'react'
import StepOneAndTwo from './StepOneAndTwo'
import StepThreeAndFour from './StepThreeAndFour'
import { useRouter } from 'next/navigation'

export type UserInfo = {
  nickname: string
  age: number
  gender: 'MALE' | 'FEMALE'
}

const ChatOnboarding = () => {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    nickname: '',
    age: 0,
    gender: 'MALE',
  })

  const handlePrevStep = () => {
    if (step === 1) {
      router.push('/')
    } else {
      setStep((prev) => prev - 1)
    }
  }

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // Step1에서는 이름, Step2는 나이를 입력받음
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleGenderSelect = (gender: UserInfo['gender']) => {
    setUserInfo((prev) => ({
      ...prev,
      gender,
    }))
    // 성별 선택 후 바로 다음 페이지로 이동
    setStep((prev) => prev + 1)
  }

  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return !userInfo.nickname.trim()
      case 2:
        return !userInfo.age || userInfo.age <= 0
      default:
        return false
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOneAndTwo
            onPrev={handlePrevStep}
            onNext={handleNextStep}
            nickname={userInfo.nickname}
            disabled={isNextDisabled()}
            onChange={handleInputChange}
          />
        )
      case 2:
        return (
          <StepOneAndTwo
            onPrev={handlePrevStep}
            onNext={handleNextStep}
            nickname={userInfo.nickname}
            disabled={isNextDisabled()}
            onChange={handleInputChange}
            isAgeStep={true}
            age={userInfo.age}
          />
        )
      case 3:
        return (
          <StepThreeAndFour
            onPrev={handlePrevStep}
            nickname={userInfo.nickname}
            age={userInfo.age}
            onGenderSelect={handleGenderSelect}
            onNext={handleNextStep}
          />
        )
      case 4:
        return (
          <StepThreeAndFour
            isCompletionStep={true}
            nickname={userInfo.nickname}
            age={userInfo.age}
            gender={userInfo.gender}
          />
        )
      default:
        return null
    }
  }

  return <div className='h-svh p-24'>{renderStep()}</div>
}

export default ChatOnboarding

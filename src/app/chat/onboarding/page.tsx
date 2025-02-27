'use client'

import { ChangeEvent, useState } from 'react'
import StepOneAndTwo from './StepOneAndTwo'
import StepThreeAndFour from './StepThreeAndFour'

export type UserInfo = {
  userName: string
  userAge: number
  userGender: string
}

const ChatOnboarding = () => {
  const [step, setStep] = useState(1)
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: 0,
    gender: '',
  })

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

  const handleGenderSelect = (gender: 'male' | 'female') => {
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
        return !userInfo.name.trim()
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
            onNext={handleNextStep}
            userName={userInfo.name}
            disabled={isNextDisabled()}
            onChange={handleInputChange}
          />
        )
      case 2:
        return (
          <StepOneAndTwo
            onNext={handleNextStep}
            userName={userInfo.name}
            disabled={isNextDisabled()}
            onChange={handleInputChange}
            isAgeStep={true}
            userAge={userInfo.age}
          />
        )
      case 3:
        return (
          <StepThreeAndFour
            userName={userInfo.name}
            userAge={userInfo.age}
            onGenderSelect={handleGenderSelect}
            onNext={handleNextStep}
          />
        )
      case 4:
        return (
          <StepThreeAndFour
            isCompletionStep={true}
            userName={userInfo.name}
            userAge={userInfo.age}
            gender={userInfo.gender}
          />
        )
      default:
        return null
    }
  }

  return <div className='min-h-screen'>{renderStep()}</div>
}

export default ChatOnboarding

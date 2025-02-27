'use client'

import Image from 'next/image'

import { useState } from 'react'

import StepTwo from './Step2'
import StepThree from './Step3'
import StepOne from './Step1'

const Onboarding = () => {
  const [step, setStep] = useState(1)

  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne onNext={handleNextStep} />
      case 2:
        return <StepTwo onPrev={handlePrevStep} onNext={handleNextStep} />
      case 3:
        return <StepThree />
      default:
        return null
    }
  }

  return (
    <div className='px-24 pt-38'>
      <div className='flex justify-center'>
        <Image
          width={289}
          height={32}
          src={`/assets/icons/progress-bar-${step}.svg`}
          alt='상태바'
        />
      </div>

      <div>{renderStep()}</div>
    </div>
  )
}

export default Onboarding

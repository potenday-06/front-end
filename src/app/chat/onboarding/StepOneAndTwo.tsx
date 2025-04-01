'use client'

import Button from '@/components/Button'
import Footer from '@/components/Footer'

import React, { ChangeEvent } from 'react'
import ChatOnboardingDescription from './ChatOnboardingDescription'
import ChatOnboardingHeader from './ChatOnboardingHeader'

export type ChatOnboardingPageProps = {
  onPrev: () => void
  onNext: () => void
  isAgeStep?: boolean
  nickname: string
  age?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
}

const StepOneAndTwo = ({
  isAgeStep,
  onChange,
  onPrev,
  onNext,
  disabled,
}: ChatOnboardingPageProps) => {
  const step = isAgeStep ? 2 : 1

  return (
    <>
      <ChatOnboardingHeader step={step} onPrev={onPrev} />

      <ChatOnboardingDescription step={step} />

      <Footer type='chatOnboarding'>
        <div className='flex items-center gap-16'>
          <p className='text-16-500 text-purple-40'>
            {step === 1 ? '내 이름은' : '나는'}
          </p>
          <input
            name={step === 1 ? 'nickname' : 'age'}
            type={step === 1 ? 'text' : 'number'}
            onChange={onChange}
            placeholder={step === 1 ? '이름 (최대 10자)' : '나이 (숫자)'}
            className='flex-1 rounded-8 bg-gray-10 py-8 pl-10 text-black-10'
          />
          {step === 2 && <p className='text-16-500 text-purple-40'>살이야</p>}
        </div>
        <Button disabled={disabled} onClick={onNext}>
          알려주기
        </Button>
      </Footer>
    </>
  )
}

export default StepOneAndTwo

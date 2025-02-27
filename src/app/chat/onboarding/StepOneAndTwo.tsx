'use client'

import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Image from 'next/image'
import React, { ChangeEvent } from 'react'

export type MainPageProps = {
  onPrev: () => void
  onNext: () => void
  isAgeStep?: boolean
  userName: string
  userAge?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
}

const StepOneAndTwo = ({
  isAgeStep,
  onChange,
  onPrev,
  onNext,
  disabled,
}: MainPageProps) => {
  const step = isAgeStep ? 2 : 1

  return (
    <div>
      <div className='mb-62 flex items-center justify-center'>
        <Image
          onClick={onPrev}
          className='fixed left-[4%] cursor-pointer'
          width={32}
          height={32}
          src='/assets/icons/button-prev-gray.svg'
          alt='뒤로가기'
        />
        <Image
          width={289}
          height={32}
          src={`${step === 1 ? '/assets/icons/progress-bar-1.svg' : '/assets/icons/progress-bar-2.svg'}`}
          alt='상태바'
        />
      </div>

      <span className='text-20-700'>
        {step === 1 ? (
          <>
            <p>반가워 안녕! 난 토리야</p>
            <p>너랑 더 친해지고 싶은데,</p>
            <p>뭐라고 부르면 될까?</p>
          </>
        ) : (
          <>
            <p>알려줘서 정말 고마워!</p>
            <p>몇 살인지 알려줄래?</p>
          </>
        )}
      </span>

      <Footer type='chatOnboarding'>
        <div className='flex items-center gap-16'>
          <p className='text-18-600'>{step === 1 ? '내 이름은' : '나는'}</p>
          <input
            name={step === 1 ? 'name' : 'age'}
            type={step === 1 ? 'text' : 'number'}
            onChange={onChange}
            placeholder={step === 1 ? '이름 (최대 10자)' : '나이 (숫자)'}
            className='flex-1 rounded-8 bg-gray-10 py-8 pl-10'
          />
          {step === 2 && <p className='text-18-600'>살이야</p>}
        </div>
        <Button disabled={disabled} onClick={onNext}>
          알려주기
        </Button>
      </Footer>
    </div>
  )
}

export default StepOneAndTwo

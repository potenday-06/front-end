'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import React, { ChangeEvent } from 'react'

export type MainPageProps = {
  onNext: () => void
  isAgeStep?: boolean
  userName: string
  userAge?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
}

const StepOneAndTwo = ({
  isAgeStep,
  userName,
  onChange,
  onNext,
  disabled,
}: MainPageProps) => {
  const step = isAgeStep ? 2 : 1

  return (
    <div className='px-24 pt-38'>
      <div className='mb-62 flex justify-center'>
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
            <p>{`${userName}구나`}</p>
            <p>알려줘서 정말 고마워!</p>
            <p>{`${userName}는 몇 살이야?`}</p>
          </>
        )}
      </span>

      <div className='fixed bottom-0 left-0 right-0 flex h-[20%] flex-col justify-between gap-31 rounded-t-10 bg-white px-24 pb-48 pt-38 text-center text-black-10'>
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
      </div>
    </div>
  )
}

export default StepOneAndTwo

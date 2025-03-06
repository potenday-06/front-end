'use client'

import Image from 'next/image'

import { useEffect, useState } from 'react'

import StepTwo from './Step2'
import StepThree from './Step3'
import StepOne from './Step1'
import Lottie from 'lottie-react'
import splashScreen from '../../../public/assets/animation/splash-screen.json'

import Link from 'next/link'
import OnboardingDescription from './OnboardingDescription'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'

const Onboarding = () => {
  const router = useRouter()
  const [step, setStep] = useState(1)

  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  useEffect(() => {
    const animation = setTimeout(() => {
      setIsAnimationComplete(true)
    }, 2000)

    return () => clearTimeout(animation)
  }, [])

  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleNextStep = () => {
    if (step === 3) {
      router.push('/')
    } else {
      setStep((prev) => prev + 1)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne />
      case 2:
        return <StepTwo />
      case 3:
        return <StepThree />
      default:
        return null
    }
  }

  return (
    <>
      {!isAnimationComplete && (
        <Lottie
          animationData={splashScreen}
          loop={false}
          className='fixed inset-0 z-[9999] h-svh'
        />
      )}
      <div className='bg-cloud-case1 flex h-svh flex-col bg-purple-20'>
        <header className='flex justify-center p-24'>
          <Image
            width={289}
            height={32}
            src={`/assets/icons/progress-bar-${step}.svg`}
            alt='상태바'
          />
        </header>

        <main className='flex-1 p-24'>{renderStep()}</main>

        <Footer type='onboarding'>
          <OnboardingDescription step={step} />

          <div className='flex items-center justify-between'>
            {step !== 1 ? (
              <Image
                className='cursor-pointer'
                onClick={handlePrevStep}
                width={48}
                height={48}
                src='/assets/icons/button-previous.svg'
                alt='이전 버튼'
              />
            ) : (
              <div className='h-48 w-48' />
            )}

            <Link href='/' className='text-14 text-gray-40 underline'>
              바로 시작하기
            </Link>
            <Image
              className='cursor-pointer'
              onClick={handleNextStep}
              width={48}
              height={48}
              src='/assets/icons/button-next.svg'
              alt='다음 버튼'
            />
          </div>
        </Footer>
      </div>
    </>
  )
}

export default Onboarding

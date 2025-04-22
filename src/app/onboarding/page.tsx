'use client'

import Image from 'next/image'

import { useLayoutEffect, useState } from 'react'

import Lottie from 'lottie-react'
import splashScreen from '../../../public/assets/animation/splash-screen.json'

import Link from 'next/link'

import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'
import clsx from 'clsx'
import ProgressBar from '@/components/ProgressBar'
import FooterContent from './FooterContent'
import MainContent from './MainContent'

type FadeState = 'splash' | 'fade-out' | 'fade-in'

const Onboarding = () => {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [fadeState, setFadeState] = useState<FadeState>('splash')

  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  const backgroundImageStyle = clsx('bg-cloud-case1', {
    'bg-cloud-onb-page2': step === 2,
    'bg-cloud-onb-page3': step === 3,
  })

  const mainStyle = clsx({
    'justify-end': step === 2,
  })

  const fadeClasses = {
    splash: 'opacity-100',
    'fade-out': 'opacity-0 transition-opacity duration-500',
    'fade-in': 'opacity-100 transition-opacity duration-500',
  }

  useLayoutEffect(() => {
    const animation = setTimeout(() => {
      setFadeState('fade-out')

      setTimeout(() => {
        setIsAnimationComplete(true)
        setFadeState('fade-in')
      }, 500)
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

  return !isAnimationComplete ? (
    <div
      className={`z-[9999] h-svh max-w-414 overflow-y-hidden bg-[#8a60ff] ${fadeClasses[fadeState]}`}
    >
      <Lottie animationData={splashScreen} loop={false} className='w-full' />
    </div>
  ) : (
    <div
      className={`${backgroundImageStyle} flex h-svh flex-col bg-purple-20 pt-24 ${fadeClasses[fadeState]}`}
    >
      <ProgressBar step={step} />

      <main className={`${mainStyle} flex flex-1 flex-col items-center p-24`}>
        <MainContent step={step} />
      </main>

      <Footer type='onboarding'>
        <FooterContent step={step} />

        <div className='flex items-center justify-between'>
          {step !== 1 ? (
            <button
              onClick={handlePrevStep}
              aria-label='이전 버튼'
              className='relative h-48 w-48 cursor-pointer'
            >
              <Image fill src='/assets/icons/button-previous.svg' alt='' />
            </button>
          ) : (
            <div className='h-48 w-48' />
          )}

          <Link href='/' className='text-14 text-gray-40 underline'>
            바로 시작하기
          </Link>
          <button
            onClick={handleNextStep}
            aria-label='다음 버튼'
            className='relative h-48 w-48 cursor-pointer'
          >
            <Image fill src='/assets/icons/button-next.svg' alt='' />
          </button>
        </div>
      </Footer>
    </div>
  )
}

export default Onboarding

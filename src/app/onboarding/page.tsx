'use client'

import Image from 'next/image'
import { useRef } from 'react'

const Onboarding = () => {
  const handleLoginWithKakao = () => {
    if (typeof window !== 'undefined' && window.Kakao) {
      window.Kakao.Auth.authorize({
        redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECTURL,
        scope: 'profile_nickname',
      })
    } else {
      console.error('Kakao SDK not loaded')
    }
  }

  const naverRef = useRef<HTMLDivElement>(null)

  const handleLoginWithNaver = () => {
    if (typeof window === 'undefined') return

    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: `${process.env.NEXT_PUBLIC_NAVER_CALLBACKURL}`,
      isPopup: false,
      loginButton: { color: 'white', type: 1, height: '16' },
      callbackHandle: true,
    })
    naverLogin.init()

    // 커스텀한 아이콘으로 눌러주기 위한 useRef를 사용하여 첫 번째 자식을 클릭
    const firstChild = naverRef.current?.children[0] as HTMLElement
    if (firstChild) {
      firstChild.click()
    }
  }

  return (
    <div className='flex flex-col rounded-30'>
      <p className='flex justify-center text-center text-white'>
        달나라 토끼들의 꿈을 담아 탄생한 찹쌀떡 토리.
        <br />
        별빛에 실린 수많은 이야기를 듣는 걸 좋아해요
        <br />
        기쁨, 슬픔, 소망, 그리고 말하지 못한 마음까지
        <br />
        토리는 언제나 귀를 기울여 줄 거예요
      </p>
      <div className='flex max-w-335 flex-col gap-12'>
        <button
          onClick={handleLoginWithKakao}
          className='flex h-46 w-full items-center justify-center gap-10 rounded-30 bg-[#FFEC45]'
        >
          <Image
            src='/assets/icons/kakao-logo.svg'
            width={16}
            height={16}
            alt='카카오'
            priority
          />
          <span className='text-[#3C1E1E]'>카카오로 시작하기</span>
        </button>
        <button
          onClick={handleLoginWithNaver}
          className='flex h-46 w-full items-center justify-center gap-10 rounded-30 bg-[#00BF18]'
        >
          <Image
            src='/assets/icons/naver-logo.svg'
            width={16}
            height={14}
            alt='네이버'
            priority
          />
          <span id='naverIdLogin' className='hidden' ref={naverRef} />
          <span className='text-white'>네이버로 시작하기</span>
        </button>
      </div>
    </div>
  )
}

export default Onboarding

'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const Login = () => {
  const naverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.naver) {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
        callbackUrl: process.env.NEXT_PUBLIC_NAVER_CALLBACKURL,
        isPopup: false,
        loginButton: { color: 'white', type: 1, height: '16' },
        callbackHandle: true,
      })
      naverLogin.init()

      // 네이버 로그인 버튼이 정상적으로 추가될 때까지 기다림 (최대 1초)
      let attempts = 0
      const checkButton = setInterval(() => {
        if (naverRef.current?.children.length) {
          clearInterval(checkButton)
        } else if (attempts > 10) {
          console.error('네이버 로그인 버튼 초기화 실패')
          clearInterval(checkButton)
        }
        attempts++
      }, 100)
    }
  }, [])

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

  const handleLoginWithNaver = () => {
    if (typeof window === 'undefined') return

    // 네이버 로그인 버튼이 정상적으로 생성되었는지 확인 후 클릭
    const firstChild = naverRef.current?.children[0] as HTMLElement
    if (!firstChild) {
      console.error('네이버 로그인 버튼이 초기화되지 않았습니다.')
      return
    }

    firstChild.click()
  }

  return (
    <div className='relative flex min-h-svh flex-col justify-between p-33'>
      <header className='flex justify-center'>
        <Image
          src='/assets/icons/logo-text.svg'
          alt='텍스트 로고'
          width={51}
          height={28}
        />
      </header>
      <main className='flex flex-1 flex-col items-center justify-center'>
        <p className='text-center text-18-600-30'>
          토리는 달나라 토끼들의 꿈에서 태어난
          <br />
          찹쌀떡 토끼예요 토리와 소중한 이야기를
          <br />
          오래 간직하려면 먼저 가입/로그인해 주세요!
        </p>
      </main>
      <Image
        className='absolute left-1/2 top-[60%] -translate-x-1/2'
        src='/assets/icons/tori-login.svg'
        width={96}
        height={116}
        alt='토리'
        priority
      />
      <footer className='flex flex-col items-center gap-12'>
        <button
          onClick={handleLoginWithKakao}
          className='flex h-46 w-full max-w-335 items-center justify-center gap-10 rounded-30 bg-[#FFEC45]'
        >
          <Image
            src='/assets/icons/kakao-logo.svg'
            width={16}
            height={16}
            alt='카카오'
          />
          <span className='text-[#3C1E1E]'>카카오로 시작하기</span>
        </button>

        <div ref={naverRef} id='naverIdLogin' className='hidden' />
        <button
          onClick={handleLoginWithNaver}
          className='flex h-46 w-full max-w-335 items-center justify-center gap-10 rounded-30 bg-[#00BF18]'
        >
          <Image
            src='/assets/icons/naver-logo.svg'
            width={16}
            height={14}
            alt='네이버'
          />
          <span className='text-white'>네이버로 시작하기</span>
        </button>
      </footer>
    </div>
  )
}

export default Login

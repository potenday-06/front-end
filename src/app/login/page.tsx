'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
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
    <div className='relative flex min-h-svh flex-col p-24'>
      <main className='flex flex-1 flex-col items-center justify-center gap-8'>
        <div className='relative h-22 w-204'>
          <Image
            src='/assets/icons/login-text-logo.svg'
            alt='함께 이야기를 나누는 토리의 우주'
            fill
          />
        </div>
        <div className='relative h-100 w-220'>
          <Image src='/assets/icons/logo-text.svg' alt='토리별' fill />
        </div>
      </main>
      <div className='flex justify-center'>
        <Image
          src='/assets/icons/tori-login.svg'
          width={96}
          height={116}
          alt='토리'
          priority
        />
      </div>
      <footer className='flex flex-col items-center gap-12 pt-24'>
        <Link
          href='https://chestnut-ellipse-bee.notion.site/1ae72891bfeb807597a3de5fc332e97b'
          className='text-gray-[#d9d9d9] text-14 underline'
        >
          개인정보처리방침
        </Link>

        <Button
          type='login'
          color='bg-[#FFEC45]'
          onClick={handleLoginWithKakao}
        >
          <Image
            src='/assets/icons/kakao-logo.svg'
            width={16}
            height={16}
            alt='카카오'
          />
          <span className='text-16-600 text-[#3C1E1E]'>카카오로 시작하기</span>
        </Button>

        <div ref={naverRef} id='naverIdLogin' className='hidden' />
        <Button
          type='login'
          color='bg-[#00BF18]'
          onClick={handleLoginWithNaver}
        >
          <Image
            src='/assets/icons/naver-logo.svg'
            width={16}
            height={14}
            alt='네이버'
          />
          <span className='text-16-600 text-white'>네이버로 시작하기</span>
        </Button>
      </footer>
    </div>
  )
}

export default Login

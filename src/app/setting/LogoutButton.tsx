'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('accessToken1')
    router.push('/login')
  }

  return (
    <button
      className='flex cursor-pointer justify-center text-14 text-[#D9D9D9] underline'
      onClick={handleLogout}
    >
      로그아웃
    </button>
  )
}

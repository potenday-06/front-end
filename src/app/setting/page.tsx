import Image from 'next/image'

import LogoutButton from './LogoutButton'
import { getUserInfo } from '@/utils/api/userInfo/route'
import Link from 'next/link'

const Setting = async () => {
  const userInfo = (await getUserInfo()).data

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} 가입`
  }

  return (
    <div className='relative flex min-h-svh flex-col items-center p-24'>
      <div className='mb-60 flex w-full justify-start'>
        <Link href='/'>
          <Image
            className='cursor-pointer'
            src='assets/icons/button-prev-gray.svg'
            width={24}
            height={24}
            alt='뒤로가기'
          />
        </Link>
        <Image
          className='ml-[36%]'
          src='assets/icons/setting-header.svg'
          width={73}
          height={38}
          alt='설정 헤더'
        />
      </div>
      <div className='w-368 rounded-10 bg-white p-18 text-black-10'>
        <p className='text-20-700'>{userInfo?.name || '사용자'}</p>
        <p className='18-600'>{formatDate(userInfo?.createdAt || '')}</p>
      </div>

      <LogoutButton />
    </div>
  )
}

export default Setting

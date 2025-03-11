import Image from 'next/image'

import LogoutButton from './LogoutButton'
import { getUserInfo } from '@/utils/api/userInfo/getUserInfo'
import Link from 'next/link'

const Setting = async () => {
  const userInfo = (await getUserInfo()).data

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} 가입`
  }

  return (
    <div className='flex h-svh flex-col p-24'>
      <header className='flex h-24 w-full justify-start'>
        <Link href='/'>
          <Image
            className='cursor-pointer'
            src='assets/icons/button-prev-gray.svg'
            width={24}
            height={24}
            alt='뒤로 가기 버튼'
          />
        </Link>
        <Image
          className='ml-[36%]'
          src='assets/icons/setting-header.svg'
          width={73}
          height={38}
          alt='나의 정보'
        />
      </header>

      <section className='flex-1'>
        <div className='mt-60 w-full rounded-10 bg-white p-18 text-purple-40'>
          <p className='text-16-600-22'>{userInfo?.nickname || '사용자'}</p>
          <p className='text-14-500'>{formatDate(userInfo?.createdAt || '')}</p>
        </div>
      </section>

      <section className='flex flex-1 flex-col gap-16'>
        <Link
          href='https://chestnut-ellipse-bee.notion.site/1b172891bfeb8021b139ef873a24008f'
          className='text-14 text-[#D9D9D9]'
        >
          서비스 이용약관
        </Link>
        <Link
          href='https://chestnut-ellipse-bee.notion.site/1ae72891bfeb807597a3de5fc332e97b'
          className='text-14 text-[#D9D9D9]'
        >
          개인정보처리방침
        </Link>
      </section>
      <LogoutButton />
    </div>
  )
}

export default Setting

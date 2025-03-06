'use client'

import Image from 'next/image'
import Link from 'next/link'

import Star from './Star'
import { useEffect, useState } from 'react'
import { starList } from '@/utils/api/stars/route'

export interface StarProps {
  starId: number
  name: string
  createdAt: string
}
export interface StarData {
  totalCount: number
  isFirst: boolean
  isLast: boolean
  content: StarProps[]
}

const SaveChat = () => {
  const [data, setData] = useState<StarData>()
  const [page, setPage] = useState(1)

  const chatList = data?.content || []

  const hasPreviousPage = !data?.isFirst || false
  const hasNextPage = !data?.isLast || false

  const isEmpty = data?.totalCount === 0

  useEffect(() => {
    const fetchStarList = async () => {
      const data = await starList(page)
      setData(data)
    }

    fetchStarList()
  }, [page])

  const handlePrevPageClick = () => {
    setPage((prev) => prev - 1)
  }

  const handleNextPageClick = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <div className='bg-cloud-case2 flex h-svh flex-col p-24'>
      <header className='relative flex items-baseline justify-between'>
        <Link href='/' className='mt-4'>
          <Image
            src='/assets/icons/button-prev-gray.svg'
            width={24}
            height={24}
            alt='뒤로가기'
          />
        </Link>
        <div className='flex flex-col items-center gap-4'>
          <Image
            src='/assets/icons/header-save-chat.svg'
            width={116}
            height={24}
            alt='헤더'
          />
          <h3 className='text-14-500'>별들을 누르면 이전 대화를 볼 수 있어!</h3>
        </div>
        <div className='h-24 w-24' />
      </header>

      <main className='max-h-[80svh] flex-1 overflow-auto [&::-webkit-scrollbar]:hidden'>
        {!isEmpty ? (
          <div className='flex flex-col items-center'>
            {chatList.map((star: StarProps, index) => {
              let starImage = '/assets/icons/star-with-ring.svg'
              let width = 100
              let height = 100
              switch (index) {
                case 1: {
                  starImage = '/assets/icons/star.svg'
                  width = 84
                  height = 84
                  break
                }
                case 2: {
                  starImage = '/assets/icons/star.svg'
                  width = 63
                  height = 63
                  break
                }
              }

              return (
                <Star
                  key={star.starId}
                  star={star}
                  starImage={starImage}
                  width={width}
                  height={height}
                />
              )
            })}
          </div>
        ) : null}
      </main>

      <footer className='flex justify-between'>
        {hasPreviousPage && !isEmpty ? (
          <Image
            onClick={handlePrevPageClick}
            className='cursor-pointer'
            src='/assets/icons/button-prev-purple.svg'
            width={48}
            height={48}
            alt='이전페이지'
          />
        ) : (
          <div style={{ width: 48, height: 48 }} />
        )}
        {hasNextPage && !isEmpty ? (
          <Image
            onClick={handleNextPageClick}
            className='cursor-pointer'
            src='/assets/icons/button-next-purple.svg'
            width={48}
            height={48}
            alt='다음페이지'
          />
        ) : (
          <div style={{ width: 48, height: 48 }} />
        )}
      </footer>
    </div>
  )
}

export default SaveChat

import Image from 'next/image'
import Link from 'next/link'
import Star from './Star'
import Pagination from './Pagination'
import { getStarList } from '@/utils/api/starList/getStarList'

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

const SaveChat = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>
}) => {
  const params = await searchParams
  const page = parseInt(params.page ?? '1')

  const data: StarData = (await getStarList(page)).data

  const chatList = data?.content || []

  const isEmpty = data?.totalCount === 0

  return (
    <div className='bg-cloud-case2 flex h-svh flex-col p-24'>
      <header className='relative flex items-baseline justify-between'>
        <Link href='/' className='mt-4' tabIndex={1}>
          <Image
            src='/assets/icons/button-prev-gray.svg'
            width={24}
            height={24}
            alt='뒤로 가기 버튼'
          />
        </Link>
        <div className='flex flex-col items-center gap-4'>
          <Image
            src='/assets/icons/header-save-chat.svg'
            width={116}
            height={24}
            alt='우리가 만든 우주'
          />
          <h3 className='text-14-500'>별들을 누르면 이전 대화를 볼 수 있어!</h3>
        </div>
        <div className='h-24 w-24' />
      </header>

      <main className='max-h-[80svh] flex-1 overflow-auto [&::-webkit-scrollbar]:hidden'>
        {!isEmpty ? (
          <div className='mt-48 flex flex-col items-center'>
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

      <Pagination
        currentPage={page}
        hasPreviousPage={!data.isFirst}
        hasNextPage={!data.isLast}
        isEmpty={isEmpty}
      />
    </div>
  )
}

export default SaveChat

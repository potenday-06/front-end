import Image from 'next/image'
import Link from 'next/link'
import { starList } from '../api/stars/route'
import Star from './Star'

export interface StarProps {
  starId: number
  name: string
  createdAt: string
}

const SaveChat = async () => {
  const data = await starList()

  return (
    <div className='relative flex flex-col justify-between'>
      <header className='relative flex flex-col items-center'>
        <Link href='/'>
          <Image
            className='absolute left-[2%]'
            src='/assets/icons/button-prev-gray.svg'
            width={24}
            height={24}
            alt='뒤로가기'
          />
        </Link>
        <h1 className='text-24-700'>우리가 만든 우주</h1>
        <h3 className='text-16-500'>별들을 누르면 이전 대화를 볼 수 있어!</h3>
      </header>

      <div className='flex flex-col items-center'>
        {data?.content?.map((star: StarProps) => (
          <Star key={star.starId} star={star} />
        ))}
      </div>
    </div>
  )
}

export default SaveChat

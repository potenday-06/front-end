import Image from 'next/image'
import { StarProps } from './page'
import Link from 'next/link'

const Star = ({ star }: { star: StarProps }) => {
  const formattedDate = star.createdAt || ''

  return (
    <Link
      href={`/save-chat/${star.starId}?date=${encodeURIComponent(formattedDate)}`}
      className='mt-42 flex cursor-pointer flex-col items-center'
    >
      <Image
        src='/assets/icons/star-with-ring.svg'
        width={146}
        height={136}
        alt='별'
        priority
      />
      <div className='mt-12 text-18-600'>{star.name}</div>
      <div className='text-18-600'>{star.createdAt}</div>
    </Link>
  )
}

export default Star

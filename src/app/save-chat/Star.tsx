import Image from 'next/image'
import { StarProps } from './page'
import Link from 'next/link'

interface StarComponentProps {
  star: StarProps
  starImage: string
  width: number
  height: number
}

const Star = ({ star, starImage, width, height }: StarComponentProps) => {
  const formattedDate = star.createdAt || ''

  return (
    <Link
      href={`/save-chat/${star.starId}?date=${encodeURIComponent(formattedDate)}`}
      className='mt-16 flex cursor-pointer flex-col items-center'
    >
      <Image src={starImage} width={width} height={height} alt='별' priority />
      <div className='mt-12 text-16-600'>{star.name}</div>
      <div className='text-14-600'>{star.createdAt}</div>
    </Link>
  )
}

export default Star

import Image from 'next/image'
import Link from 'next/link'

const Header = ({ date, onClick }: { date: string; onClick: () => void }) => {
  return (
    <header className='flex items-start justify-between p-24 pb-0'>
      <button
        onClick={onClick}
        aria-label='이전 페이지로 돌아가기'
        className='relative mt-4 h-24 w-24 cursor-pointer'
      >
        <Image src='/assets/icons/button-prev-gray.svg' fill alt='' />
      </button>

      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-18'>토리와 대화 내용</h1>
        {date && <h3 className='text-14-500'>{date}</h3>}
      </div>
      <Link
        href='/'
        aria-label='메인 페이지로 돌아가기'
        className='relative mt-6 h-18 w-18'
      >
        <Image
          className='cursor-pointer'
          src='/assets/icons/home.svg'
          alt=''
          fill
        />
      </Link>
    </header>
  )
}

export default Header

import Image from 'next/image'

const Loading = () => {
  return (
    <div className='flex h-svh flex-col items-center justify-center gap-4'>
      <Image
        src='assets/icons/star.svg'
        alt='별 아이콘'
        width={55}
        height={55}
      />
      <div className='flex items-center'>
        <Image
          src='assets/icons/loading-text.svg'
          alt='별 찾는중...'
          width={69}
          height={22}
        />
        <span className='loading-dots ml-1 text-16-600'>.</span>
      </div>
    </div>
  )
}

export default Loading

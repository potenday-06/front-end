import Image from 'next/image'

const Loading = () => {
  return (
    <div className='flex h-svh flex-col items-center justify-center gap-4'>
      <Image
        src='/assets/icons/star.svg'
        alt='별 아이콘'
        width={55}
        height={55}
      />
      <h2 className='text-20'>별 찾는중...</h2>
    </div>
  )
}

export default Loading

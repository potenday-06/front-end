import Image from 'next/image'
import Link from 'next/link'

const SaveChat = () => {
  return (
    <div className='relative flex flex-col justify-between'>
      <header className='relative flex flex-col items-center'>
        <Link href='/'>
          <Image
            className='fixed left-[7%]'
            src='/assets/icons/button-prev-gray.svg'
            width={32}
            height={32}
            alt='뒤로가기'
          />
        </Link>
        <h1 className='text-24-700'>우리가 만든 우주</h1>
        <h3 className='text-16-500'>별들을 누르면 이전 대화를 볼 수 있어!</h3>
      </header>

      {/* <Image
        src='/assets/icons/star-with-ring.svg'
        width={146}
        height={136}
        alt='별'
        priority
      /> */}
      {/**To Do: 저장한 대화가 있다면 별 이미지 + n번째 별 + 날짜(오늘, 3일 전 등) 표시 */}
      {/**To Do: 각 별 클릭 시 [] 사용해서 라우팅 */}
    </div>
  )
}

export default SaveChat

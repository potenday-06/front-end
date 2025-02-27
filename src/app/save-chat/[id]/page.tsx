import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='relative flex min-h-screen flex-col justify-between'>
      <header className='flex flex-col items-center'>
        <Link href='/save-chat'>
          <Image
            className='fixed left-[7%]'
            src='/assets/icons/button-prev-gray.svg'
            width={32}
            height={32}
            alt='뒤로가기'
          />
        </Link>
        <h1 className='text-24-700'>
          {'2'}번째 {'서영이'}별 {/**To Do: userName 받아와서 적용*/}
        </h1>
      </header>

      {/**To Do: 당일날 나눈 대화 갯수만큼 버튼 렌더링*/}

      {/* <Button>n번째 이야기</Button> */}
    </div>
  )
}

export default page

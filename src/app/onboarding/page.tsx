import Image from 'next/image'

const Onboarding = () => {
  return (
    <div>
      <Image
        width={289}
        height={32}
        src='assets/icons/progress-bar.svg'
        alt='상태바'
      />
      <p>
        서영이랑 놀아서 신나!
        <br />
        오늘 기분 어떤지 이야기해줄래?
      </p>
      <div className='text-purple'>나는 오늘 너무 기분 좋았어!</div>
      <Image width={48} height={10} src='assets/icons/loading.svg' alt='로딩' />
    </div>
  )
}

export default Onboarding

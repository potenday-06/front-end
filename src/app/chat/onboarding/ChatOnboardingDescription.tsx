import Image from 'next/image'

const ChatOnboardingDescription = ({
  step,
  age,
}: {
  step: number
  age?: number
}) => {
  return (
    <>
      <main className='flex flex-1 flex-col items-center justify-center text-16-500'>
        {step === 1 && (
          <>
            <p>반가워 안녕! 난 토리야</p>
            <p>너랑 더 친해지고 싶은데,</p>
            <p>뭐라고 부르면 될까?</p>
          </>
        )}
        {step === 2 && (
          <>
            <p>정말 멋진 이름이네!</p>
            <p>알려줘서 정말 고마워</p>
            <p>몇 살인지 알려줄래?</p>
          </>
        )}
        {step === 3 && (
          <>
            <p>우와! {age}살이구나.</p>
            <p>남자야? 여자야?</p>
          </>
        )}

        {step === 4 && (
          <>
            <p>고마워, 내가 잘 기억할게</p>
            <p>내 이름은 토리야</p>
            <p>만나서 반가워!</p>
          </>
        )}
      </main>
      {step === 4 && (
        <Image
          className='absolute left-1/2 top-[60%] -translate-x-1/2'
          src='/assets/icons/tori-cute.svg'
          width={96}
          height={116}
          alt='토리'
          priority
        />
      )}
    </>
  )
}

export default ChatOnboardingDescription

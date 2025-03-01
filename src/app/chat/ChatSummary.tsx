import Image from 'next/image'

type ChatSummaryProps = {
  summary: string
  isLoading: boolean
}

const ChatSummary = ({ summary, isLoading }: ChatSummaryProps) => {
  return (
    <div className='pt-40'>
      <p className='scrollbar-bar-hidden max-h-[50svh] overflow-y-auto text-20-700 [&::-webkit-scrollbar]:hidden'>
        {summary}
      </p>
      <Image
        className='absolute bottom-[15%] left-1/2 -translate-x-1/2'
        src='/assets/icons/tori-hug-star.svg'
        alt='토리'
        width={91}
        height={112}
      />
    </div>
  )
}

export default ChatSummary

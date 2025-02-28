import Image from 'next/image'

type ChatSummaryProps = {
  summary: string
  isLoading: boolean
}

const ChatSummary = ({ summary, isLoading }: ChatSummaryProps) => {
  return (
    <div className='pt-[26%]'>
      <p className='text-20-700'>{summary}</p>
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

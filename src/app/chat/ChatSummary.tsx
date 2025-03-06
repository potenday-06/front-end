type ChatSummaryProps = {
  summary: string
}

const ChatSummary = ({ summary }: ChatSummaryProps) => {
  return (
    <p className='scrollbar-bar-hidden overflow-y-auto text-16-600 [&::-webkit-scrollbar]:hidden'>
      {summary}
    </p>
  )
}

export default ChatSummary

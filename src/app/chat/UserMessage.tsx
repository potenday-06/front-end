import { MessageProps } from './MessageWrapper'

const UserMessage = ({ content }: Pick<MessageProps, 'content'>) => {
  return (
    <div className='inline-block w-max max-w-[80%] rounded-10 border border-solid border-[#b49df1] bg-white px-16 py-8 text-left text-14-500 text-purple-40'>
      {content}
    </div>
  )
}

export default UserMessage

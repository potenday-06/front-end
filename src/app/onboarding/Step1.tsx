'use client'

import AIMessage from '../chat/AiMessage'

const StepOne = () => {
  return (
    <div className='mt-40'>
      <AIMessage />
      <div className='ml-auto mt-24 flex w-max items-center justify-center rounded-12 border border-solid border-[#b49df1] bg-white px-23 py-13 text-14-500 text-purple-40'>
        나는 오늘 너무 기분 좋았어!
      </div>
    </div>
  )
}

export default StepOne

import clsx from 'clsx'

const ProgressBar = ({ step }: { step: number }) => {
  const progressBarStyle = clsx({
    'w-84': step === 1,
    'w-168': step === 2,
    'w-250': step === 3,
  })

  return (
    <section className='flex justify-center'>
      <div className='flex items-center'>
        <div className='mr-20 h-7 w-250 rounded-10 bg-purple-5'>
          <div className={`${progressBarStyle} h-7 rounded-10 bg-white`} />
        </div>
        <p className='leading-32 mr-2 text-12 font-bold'>{step}</p>
        <p className='leading-32 text-12 font-bold tracking-[2] text-purple-5'>
          /3
        </p>
      </div>
    </section>
  )
}

export default ProgressBar

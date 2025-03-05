import Skeleton from '@/components/Skeleton'

const SettingSkeleton = () => {
  return (
    <div className='flex h-svh flex-col p-24'>
      <header className='flex w-full justify-start'>
        <Skeleton className='h-24 w-24 rounded-full' />
        <Skeleton className='ml-[36%] h-24 w-73 rounded-10' />
      </header>

      <main className='flex-1'>
        <div className='mt-60 w-full rounded-10 bg-white p-18'>
          <Skeleton className='h-54 rounded-10' />
        </div>
      </main>

      <footer className='flex justify-center'>
        <Skeleton className='h-24 w-56 rounded-10' />
      </footer>
    </div>
  )
}

export default SettingSkeleton

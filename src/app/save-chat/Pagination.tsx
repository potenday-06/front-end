import Image from 'next/image'
import Link from 'next/link'

const Pagination = async ({
  currentPage,
  hasPreviousPage,
  hasNextPage,
  isEmpty,
}: {
  currentPage: number
  hasPreviousPage: boolean
  hasNextPage: boolean
  isEmpty: boolean
}) => {
  return (
    <footer className='flex justify-between'>
      {hasPreviousPage && !isEmpty ? (
        <Link
          aria-label='이전 페이지'
          href={`/save-chat?page=${currentPage - 1}`}
        >
          <Image
            className='cursor-pointer'
            src='/assets/icons/button-prev-purple.svg'
            width={48}
            height={48}
            alt=''
          />
        </Link>
      ) : (
        <div style={{ width: 48, height: 48 }} />
      )}
      {hasNextPage && !isEmpty ? (
        <Link
          aria-label='다음 페이지'
          href={`/save-chat?page=${currentPage + 1}`}
        >
          <Image
            className='cursor-pointer'
            src='/assets/icons/button-next-purple.svg'
            width={48}
            height={48}
            alt=''
          />
        </Link>
      ) : (
        <div style={{ width: 48, height: 48 }} />
      )}
    </footer>
  )
}

export default Pagination

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
        <Link href={`/save-chat?page=${currentPage - 1}`}>
          <Image
            className='cursor-pointer'
            src='/assets/icons/button-prev-purple.svg'
            width={48}
            height={48}
            alt='이전 페이지'
            tabIndex={3}
          />
        </Link>
      ) : (
        <div style={{ width: 48, height: 48 }} />
      )}
      {hasNextPage && !isEmpty ? (
        <Link href={`/save-chat?page=${currentPage + 1}`}>
          <Image
            className='cursor-pointer'
            src='/assets/icons/button-next-purple.svg'
            width={48}
            height={48}
            alt='다음 페이지'
            tabIndex={4}
          />
        </Link>
      ) : (
        <div style={{ width: 48, height: 48 }} />
      )}
    </footer>
  )
}

export default Pagination

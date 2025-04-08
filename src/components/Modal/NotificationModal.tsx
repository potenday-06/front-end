import { saveFcmTokenToFirestore } from '@/utils/firebaseCloudMessaging/saveFcmTokenToFirestore'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const NotificationModal = ({ closeModal }: { closeModal: () => void }) => {
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    // 클라이언트 사이드에서만 localStorage 접근
    setUserId(localStorage.getItem('userId'))
  }, [])

  const handleConfirm = async () => {
    if (!userId) return
    closeModal()
    await saveFcmTokenToFirestore(userId)
  }

  return (
    <div className='flex h-213 w-370 flex-col items-center justify-between rounded-16 bg-white px-32 py-24'>
      <Image src='/assets/icons/alert.svg' width={28} height={28} alt='' />
      <p className='text-16-500 text-black-10'>알림을 받아보시겠어요?</p>
      <p className='text-14-500 text-gray-20'>
        토리가 들려주는 다양한 이야기를 들어보세요
      </p>
      <div className='flex gap-20'>
        <button
          onClick={closeModal}
          className='h-40 w-86 rounded-8 border border-gray-20 px-16 py-8 text-[#333236] hover:bg-gray-10'
        >
          거절
        </button>
        <button
          onClick={handleConfirm}
          className='h-40 w-86 rounded-8 bg-purple-20 px-16 py-8 hover:bg-purple-10'
        >
          허용
        </button>
      </div>
    </div>
  )
}

export default NotificationModal

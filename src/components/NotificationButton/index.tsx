'use client'

import Image from 'next/image'
import ModalOverlay from '../Modal'
import { useState } from 'react'

const NotificationButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className='relative h-24 w-24'
        aria-label='알림 설정 아이콘'
      >
        <Image src='/assets/icons/notification.svg' alt='' fill />
      </button>

      {isModalVisible && <ModalOverlay closeModal={handleCloseModal} />}
    </>
  )
}

export default NotificationButton

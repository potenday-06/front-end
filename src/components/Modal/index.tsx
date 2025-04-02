'use client'

import { createPortal } from 'react-dom'
import NotificationModal from './NotificationModal'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

function ModalOverlay({ closeModal }: { closeModal: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const modalClasses = clsx(
    'fixed cursor-default inset-0 z-40 flex items-center justify-center bg-[#000000] bg-opacity-50 transition-opacity duration-300'
  )

  if (!mounted) return null

  return createPortal(
    <div className={modalClasses}>
      <NotificationModal closeModal={closeModal} />
    </div>,
    document.body
  )
}

export default ModalOverlay

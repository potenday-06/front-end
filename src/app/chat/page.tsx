'use client'

import dynamic from 'next/dynamic'

const Chat = dynamic(() => import('./Chat'), { ssr: false })

export default function Page() {
  return <Chat />
}

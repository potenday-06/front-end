'use client'

import dynamic from 'next/dynamic'

const Onboarding = dynamic(() => import('./Onboarding'), { ssr: false })

export default function Page() {
  return <Onboarding />
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='bg-cloud-case1 relative min-h-screen bg-purple-20'>
      {children}
    </div>
  )
}

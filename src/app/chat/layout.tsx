export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='h-svh overflow-hidden p-24'>{children}</div>
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='bg-cloud-case2'>{children}</div>
}

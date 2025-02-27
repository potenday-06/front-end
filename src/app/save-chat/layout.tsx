export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='px-24 py-38'>{children}</div>
}

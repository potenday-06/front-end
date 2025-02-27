export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='px-24 pt-38'>{children}</div>
}

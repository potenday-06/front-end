export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='bg-cloud min-h-screen p-33'>{children}</div>
}

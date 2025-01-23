import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'talk to apps',
  description: 'interact with your fav apps with natural language',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

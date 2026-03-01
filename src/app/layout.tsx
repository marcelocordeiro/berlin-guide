import type { Metadata } from 'next'
import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kiez',
  description: 'Discover the soul of the city.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={'antialiased'}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

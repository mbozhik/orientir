import localFont from 'next/font/local'
import type {Metadata} from 'next'
import './globals.css'

const Circe = localFont({
  src: [
    {
      path: '../assets/fonts/Circe-Light.woff',
      weight: '300',
    },
    {
      path: '../assets/fonts/Circe-Regular.woff',
      weight: '400',
    },
    {
      path: '../assets/fonts/Circe-Bold.woff',
      weight: '700',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Orientir',
  description: 'Девелопер полного цикла в сфере складской и индустриальной недвижимости.',
}

import Header from '~/Global/Header/Header'
import Footer from '~/Global/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${Circe.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

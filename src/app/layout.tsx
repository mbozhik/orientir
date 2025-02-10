export {metadata} from '@/lib/layout-config'
import {circe} from '@/lib/layout-config'
import './globals.css'

import Header from '~/Global/Header/Header'
import Footer from '~/Global/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${circe.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

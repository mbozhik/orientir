export {metadata} from '@/lib/layout-config'
import {circe} from '@/lib/layout-config'
import './globals.css'

import Header from '~/Global/Header/Header'
import Footer from '~/Global/Footer'

import YandexMetrika from '~/Global/Analytics'
import {SanityLive} from '@/sanity/lib/live'

import {VisualEditing} from 'next-sanity'
import {draftMode} from 'next/headers'
import {DisableDraftMode} from '~/Global/DisableDraftMode'

// export const dynamic = 'force-static'
// export const revalidate = 3600

export default async function RootLayout({
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

        <SanityLive />

        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}

        {process.env.NODE_ENV === 'production' && <YandexMetrika />}
      </body>
    </html>
  )
}

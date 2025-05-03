'use client'

import {useTransition} from 'react'
import {useRouter, usePathname} from 'next/navigation'
import {disableDraftMode} from '@/utils/disable-draft-mode'
import {cn} from '-/src/lib/utils'

export function DisableDraftMode() {
  const router = useRouter()
  const pathname = usePathname()
  const [pending, startTransition] = useTransition()

  if (pathname?.startsWith('/studio')) {
    return null
  }

  // if (window !== window.parent || !!window.opener) {
  //   return null
  // }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode()
      router.refresh()
    })

  return (
    <div>
      {pending ? (
        'Отключаем режим черновика...'
      ) : (
        <button type="button" className={cn('fixed bottom-4 right-5 z-[999]', 'bg-blue text-background text-sm rounded-md px-2 py-1')} onClick={disable}>
          Отключить режим черновика
        </button>
      )}
    </div>
  )
}

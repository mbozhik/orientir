'use client'

import {useState} from 'react'

export default function LangSwitch() {
  const [language, setLanguage] = useState('ru')

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ru' : 'en'))
  }

  return (
    <button className="opacity-0 sm:hidden" onClick={toggleLanguage}>
      {language === 'en' ? 'Ru' : 'En'}
    </button>
  )
}

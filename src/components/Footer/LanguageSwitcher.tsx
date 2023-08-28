'use client'

import { useState } from 'react'
import { languages, countries } from '@/i18n/settings'
import { useParams, usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const { lng } = useParams()
  const [show, setShow] = useState(false)

  const toggle = () => setShow(!show)

  return (
    <div>
      <button onClick={toggle} className="relative flex gap-1 items-center md:pr-0 pr-2">
        <p className="text-xs text-black-alpha-900">{countries[lng]}</p>
        <img src="/images/footer/language.svg" />
        <div className={`z-20 bg-white absolute bottom-6 right-0 rounded-lg shadow w-44 ${show ? 'block' : 'hidden'}`}>
          <ul className="p-3 flex flex-col gap-1 items-start text-base font-bold text-black-alpha-900" aria-labelledby="dropdownDelayButton">
            {languages.filter((item) => lng !== item).map(item => {
              return (
                <li key={item}>
                  <a href={pathname.replace(lng, item)} className="px-3 py-2 text-left">{countries[item]}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </button>
    </div>
  )
}

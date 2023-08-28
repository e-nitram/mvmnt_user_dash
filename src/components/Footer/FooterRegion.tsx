'use client'

import Link from 'next/link'
import { useTranslation } from '@/i18n/client'
import LanguageSwitcher from './LanguageSwitcher'

export default function FooterRegion({
  lng
}: {
  lng: string
}) {
  const { t } = useTranslation(lng, 'translation')

  return (
    <>
      <ul className="grid grid-cols-2 md:hidden flex-col gap-6 items-center text-black-alpha-600 leading-5 text-center text-xs font-bold">
        <li>
          <Link href="/blog">{t('FOOTER.LIST.TERMS')}</Link>
        </li>
        <li>
          <Link href="/blog">{t('FOOTER.LIST.PRIVACY_POLICY')}</Link>
        </li>
        <li>
          <Link href="/blog">{t('FOOTER.LIST.LICENSES')}</Link>
        </li>
        <li>
          <Link href="/blog">{t('FOOTER.LIST.PROHIBITED_ITEMS')}</Link>
        </li>
      </ul>
      <div className="md:px-10 md:py-6 py-6 px-4 flex justify-between">
        <div className="flex gap-8 items-center md:pl-0 pl-2">
          <p className="text-xs text-black-alpha-900 leading-6">{t('FOOTER.COPYRIGHT')}</p>
          <ul className="md:flex hidden gap-8 items-center text-black-alpha-600 leading-6 text-xs font-bold">
            <li>
              <Link href="/blog">{t('FOOTER.LIST.TERMS')}</Link>
            </li>
            <li>
              <Link href="/blog">{t('FOOTER.LIST.PRIVACY_POLICY')}</Link>
            </li>
            <li>
              <Link href="/blog">{t('FOOTER.LIST.LICENSES')}</Link>
            </li>
            <li>
              <Link href="/blog">{t('FOOTER.LIST.PROHIBITED_ITEMS')}</Link>
            </li>
          </ul>
        </div>
        <LanguageSwitcher />
      </div>
    </>
  )
}

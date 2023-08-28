'use client'

import Link from 'next/link'
import { useTranslation } from '@/i18n/client'

export default function SignUpComplete() {
  const { t } = useTranslation()

  return (
    <div className="md:pt-32 pt-[120px] md:mb-[116px] mb-16 text-black-alpha-900 flex flex-col items-center">
      <img src="/images/auth/signup-complete.png" className="md:h-80 md:w-fit w-60 h-fit" />
      <h2 className="font-bold text-2xl leading-10 mt-6">{t("AUTH.REGISTER.COMPLETE.TITLE")}</h2>
      <div className="md:text-lg text-sm font-bold text-center mt-4">
        {t("AUTH.REGISTER.COMPLETE.TEXT", { returnObjects: true }).map((txt, i) => <p key={i}>{txt}</p>)}
      </div>
      <Link href="/signin">
        <button className="btn-primary w-60 mt-8">{t("AUTH.LOGIN.TITLE")}</button>
      </Link>
    </div>
  )
}

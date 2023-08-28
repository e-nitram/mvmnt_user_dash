'use client'

import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  InputField
} from "@/components/Form/index"
import { useTranslation } from '@/i18n/client'
import { AuthContext } from '@/context'

export default function RecoverCodeClient() {
  const [code, setCode] = useState('')
  const { t } = useTranslation()

  return (
    <div className="md:pt-[120px] pt-16 md:mb-[60px] mb-[72px] flex justify-center gap-10 px-4 text-black-alpha-900">
      <div className="md:p-8 p-6 card w-full max-w-[640px]">
        <div className="flex justify-center">
          <img src="/images/logo.svg" />
        </div>
        <h2 className="font-bold text-xl leading-10 text-center pt-6">{t("AUTH.LOGIN.RECOVER_CODE.TITLE")}</h2>
        <p className="text-sm leading-6 mt-2 text-center">{t("AUTH.LOGIN.RECOVER_CODE.DESCRIPTION")}</p>
        <div className="flex flex-col gap-3 mt-6">
          <InputField
            label={t("AUTH.LOGIN.RECOVER_CODE.TEXT")}
            required={true}
            value={code}
            onChange={setCode}
          />
        </div>
        <div className="flex justify-start mt-4 mb-16">
          <Link href='/signin/two_factor_auth' className="text-sm">{t("AUTH.LOGIN.RECOVER_CODE.AUTH_APP")}</Link>
        </div>
        <Link href="/signin/verify">
          <button className="btn-primary w-full mt-3">{t("FORM.BUTTON.LOGIN")}</button>
        </Link>
      </div>
    </div>
  )
}

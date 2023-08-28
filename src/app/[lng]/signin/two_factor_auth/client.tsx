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

export default function AuthAppClient() {
  const { t } = useTranslation()

  const validationSchema = yup.object({
    code: yup
      .string()
      .required(t("FORM.VALIDATION_MESSAGE.REQUIRED"))
  })

  const formik = useFormik({
    initialValues: {
      code: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => console.log(values),
  })

  return (
    <div className="md:pt-[120px] pt-16 md:mb-[60px] mb-[72px] flex justify-center gap-10 px-4 text-black-alpha-900">
      <div className="md:p-8 p-6 card w-full max-w-[640px]">
        <div className="flex justify-center">
          <img src="/images/logo.svg" />
        </div>
        <h2 className="font-bold text-xl leading-10 text-center pt-6">{t("AUTH.LOGIN.AUTH_APP.TITLE")}</h2>
        <p className="text-sm leading-6 mt-2 text-center">{t("AUTH.LOGIN.AUTH_APP.DESCRIPTION")}</p>
        <div className="flex flex-col gap-3 mt-6">
          <InputField
            id='code'
            name='code'
            label={t("AUTH.LOGIN.AUTH_APP.DIGIT_CODE")}
            required={true}
            value={formik.values.code}
            onChange={formik.handleChange}
            error={formik.touched.code && Boolean(formik.errors.code)}
            helperText={formik.touched.code && formik.errors.code}
          />
        </div>
        <div className="flex justify-start mt-4 mb-16">
          <Link href='/signin/recover_code' className="text-sm">{t("AUTH.LOGIN.AUTH_APP.RECOVER_CODE")}</Link>
        </div>
        <Link href="/signin/verify">
          <button className="btn-primary w-full mt-3">{t("FORM.BUTTON.LOGIN")}</button>
        </Link>
      </div>
    </div>
  )
}

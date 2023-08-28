'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  InputField
} from "@/components/Form/index"
import { useTranslation } from '@/i18n/client'
import { AuthContext } from '@/context'
import { useRouter } from 'next/navigation'

export default function SignInIndividualClient() {
  const { t } = useTranslation()
  const router = useRouter()
  const { login } = useContext(AuthContext)

  const validationSchema = yup.object({
    email: yup
      .string()
      .required(t("FORM.VALIDATION_MESSAGE.REQUIRED")),
    password: yup
      .string()
      .required(t("FORM.VALIDATION_MESSAGE.REQUIRED"))
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => login(values)
  })

  return (
    <div className="md:pt-[120px] pt-16 md:mb-[60px] mb-[72px] flex justify-center gap-10 px-4 text-black-alpha-900">
      <form onSubmit={formik.handleSubmit} className="md:p-8 p-6 card w-full max-w-[640px]" noValidate>
        <div className="flex justify-center">
          <img src="/images/logo.svg" />
        </div>
        <h2 className="font-bold text-xl leading-10 text-center pt-6">{t("AUTH.LOGIN.TITLE")}</h2>
        <div className="flex flex-col gap-3 mt-6">
          <InputField
            id='email'
            name='email'
            label={t("AUTH.LOGIN.FORM.EMAIL")}
            required={true}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <InputField
            id='password'
            name='password'
            label={t("AUTH.LOGIN.FORM.PASSWORD")}
            required={true}
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <div className="flex justify-end mt-4 mb-16">
          <Link href='/' className="text-sm">{t("AUTH.LOGIN.FORM.FORGOT_PASSWORD")}</Link>
        </div>
        <button type="submit" className="btn-primary w-full mt-3">{t("FORM.BUTTON.LOGIN")}</button>
        <div className="flex justify-end mt-2">
          <Link href='/signup' className="text-sm">{t("AUTH.LOGIN.FORM.NO_ACCOUNT")} <b>{t("FORM.BUTTON.SIGNUP")}</b></Link>
        </div>
      </form>
    </div>
  )
}

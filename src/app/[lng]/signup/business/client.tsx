'use client'

import { useContext } from 'react'
import { useFormik } from 'formik'
import { useTranslation } from '@/i18n/client'
import * as yup from 'yup'

import { AuthContext } from '@/context'
import {
  InputField
} from "@/components/Form/index"

export default function SignUpIndividualClient() {
  const { t } = useTranslation()
  const { signup, brand_url } = useContext(AuthContext)

  const validationSchema = yup.object({
    username: yup
      .string()
      .required(t("FORM.VALIDATION_MESSAGE.REQUIRED")),
    display_name: yup
      .string()
      .required(t("FORM.VALIDATION_MESSAGE.REQUIRED")),
    email: yup
      .string()
      .email(t("FORM.VALIDATION_MESSAGE.INVALID_EMAIL"))
      .required(t("FORM.VALIDATION_MESSAGE.REQUIRED")),
    password: yup
      .string()
      .min(8, t("FORM.VALIDATION_MESSAGE.MIN_PASSWORD"))
      .required(t("FORM.VALIDATION_MESSAGE.REQUIRED")),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], t("FORM.VALIDATION_MESSAGE.PASSWORD_NOT_EQUAL"))
      .min(8, t("FORM.VALIDATION_MESSAGE.MIN_PASSWORD"))
      .required(t("FORM.VALIDATION_MESSAGE.REQUIRED")),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      display_name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const user = {
        "email": values.email,
        "username": values.username,
        "display_name": values.display_name,
        "password": values.password,
        "name": values.username,
        "gender": "MALE",
        "account_type": "BUSINESS_COMPANY",
        brand_url
      }

      signup(user)
    },
  });

  return (
    <div className="md:pt-[120px] pt-16 md:mb-[60px] mb-[72px] flex justify-center gap-10 px-4 text-black-alpha-900">
      <form onSubmit={formik.handleSubmit} className="md:p-8 p-6 card w-full max-w-[640px]">
        <div className="flex justify-center">
          <img src="/images/logo.svg" />
        </div>
        <h2 className="font-bold text-xl leading-10 text-center pt-6">{t("AUTH.REGISTER.ACCOUNT_SETTING")}</h2>
        <div className="flex flex-col gap-3 mt-6">
          <InputField
            id='username'
            name='username'
            label={t("AUTH.REGISTER.FORM.USERNAME")}
            required={true}
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <InputField
            id='display_name'
            name='display_name'
            label={t("AUTH.REGISTER.FORM.DISPLAY_NAME")}
            required={true}
            value={formik.values.display_name}
            onChange={formik.handleChange}
            error={formik.touched.display_name && Boolean(formik.errors.display_name)}
            helperText={formik.touched.display_name && formik.errors.display_name}
          />
          <InputField
            id='email'
            name='email'
            label={t("AUTH.REGISTER.FORM.EMAIL")}
            required={true}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <InputField
            id='password'
            name='password'
            label={t("AUTH.REGISTER.FORM.PASSWORD")}
            required={true}
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <InputField
            id='confirmPassword'
            name='confirmPassword'
            label={t("AUTH.REGISTER.FORM.CONFIRM_PASSWORD")}
            required={true}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            type="password"
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
        </div>
        <p className="text-black-alpha-800 text-center text-sm leading-6 mt-16">{t("AUTH.REGISTER.TERMS")}</p>
        <button type="submit" className="btn-primary w-full mt-3">{t("FORM.BUTTON.NEXT")}</button>
      </form>
    </div>
  )
}

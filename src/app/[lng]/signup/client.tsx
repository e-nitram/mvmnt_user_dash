'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import { useTranslation } from '@/i18n/client'
import Link from 'next/link'
import * as yup from 'yup'

import { AuthContext } from '@/context'
import {
  InputField
} from "@/components/Form/index"
import Tabs from "@/components/Auth/Tab"

const DescriptionCard = ({
  data
}: {
  data: any
}) => {
  return (
    <div className="py-4">
      <h3 className="font-bold text-md leading-6">{data.TITLE}</h3>
      <ul className="text-sm leading-6 mt-1 pl-6 list-disc list-outside">
        {
          data.LIST.map((ITEM: any, i: number) => (
            <li key={i}>
              { ITEM.VALUE }
              { ITEM.LIST &&
                <ul className="pl-6 list-decimal list-outside">
                  { ITEM.LIST.map((TEXT: string, j: number) => <li key={j}>{TEXT}</li>) }
                </ul>
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default function SignUpClient() {
  const { t } = useTranslation()
  const { setBrandUrl } = useContext(AuthContext)
  const router = useRouter()

  const validationSchema = yup.object({
    link: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        t("FORM.VALIDATION_MESSAGE.INVALID_URL")
      )
      .required(t("FORM.VALIDATION_MESSAGE.REQUIRED")),
  })

  const formik = useFormik({
    initialValues: {
      link: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setBrandUrl(values.link)
      router.push('/signup/business')
    }
  })

  const tabList = [
    {
      title: t("AUTH.REGISTER.INDIVIDUAL_CARD.TITLE_TAB"),
      body: <div>
        <div className="flex justify-start items-center p-2 gap-4">
          <img src="/images/auth/individual.svg" className="w-12" />
          <h2 className="font-bold text-lg leading-6 text-center">{t("AUTH.REGISTER.INDIVIDUAL_CARD.TITLE_MOBILE")}</h2>
        </div>
        { t("AUTH.REGISTER.INDIVIDUAL_CARD.DESCRIPTIONS", { returnObjects: true }).map((data: any, i: number) => <DescriptionCard key={i} data={data} />) }
        <Link href="/signup/individual">
          <button className="btn-primary w-full mt-4">{t("FORM.BUTTON.SIGNUP")}</button>
        </Link>
      </div>
    },
    {
      title: t("AUTH.REGISTER.BUSINESS_CARD.TITLE_TAB"),
      body: <div>
        <div className="flex justify-start items-center p-2 gap-4">
          <img src="/images/auth/business.svg" className="w-12" />
          <h2 className="font-bold text-lg leading-6 text-center">{t("AUTH.REGISTER.BUSINESS_CARD.TITLE_MOBILE")}</h2>
        </div>
        { t("AUTH.REGISTER.BUSINESS_CARD.DESCRIPTIONS", { returnObjects: true }).map((data: any, i: number) => <DescriptionCard key={i} data={data} />) }
        <div className="py-4">
          <InputField
            label={t("AUTH.REGISTER.BUSINESS_CARD.INPUT_LABEL")}
            required={true}
            placeholder={t("AUTH.REGISTER.BUSINESS_CARD.PLACEHOLDER")}
            text={t("AUTH.REGISTER.BUSINESS_CARD.TEXT")}
            value={formik.values.link}
            onChange={formik.handleChange}
          />
        </div>
        <Link href="/signup/business">
          <button className="btn-primary w-full mt-4">{t("FORM.BUTTON.SIGNUP")}</button>
        </Link>
      </div>
    }
  ]

  return (
    <>
      <div className="mt-10 mb-[108px] md:flex hidden justify-center gap-10 px-5 text-black-alpha-900">
        <div className="p-8 card w-[440px] flex flex-col">
          <h2 className="font-bold text-xl leading-6 text-center p-2">{t("AUTH.REGISTER.INDIVIDUAL_CARD.TITLE")}</h2>
          <div className="flex justify-center py-6">
            <img src="/images/auth/individual.svg" />
          </div>
          { t("AUTH.REGISTER.INDIVIDUAL_CARD.DESCRIPTIONS", { returnObjects: true }).map((data: any, i: number) => <DescriptionCard key={i} data={data} />) }
          <Link href="/signup/individual" className="btn-primary w-full mt-auto text-center">
            {t("FORM.BUTTON.SIGNUP")}
          </Link>
        </div>
        <form onSubmit={formik.handleSubmit} className="p-8 card w-[440px] flex flex-col" noValidate>
          <h2 className="font-bold text-xl leading-6 text-center p-2">{t("AUTH.REGISTER.BUSINESS_CARD.TITLE")}</h2>
          <div className="flex justify-center py-6">
            <img src="/images/auth/business.svg" />
          </div>
          { t("AUTH.REGISTER.BUSINESS_CARD.DESCRIPTIONS", { returnObjects: true }).map((data: any, i: number) => <DescriptionCard key={i} data={data} />) }
          <div className="py-4">
            <InputField
              id='link'
              name='link'
              label={t("AUTH.REGISTER.BUSINESS_CARD.INPUT_LABEL")}
              required={true}
              placeholder={t("AUTH.REGISTER.BUSINESS_CARD.PLACEHOLDER")}
              text={t("AUTH.REGISTER.BUSINESS_CARD.TEXT")}
              value={formik.values.link}
              onChange={formik.handleChange}
              error={formik.touched.link && Boolean(formik.errors.link)}
              helperText={formik.touched.link && formik.errors.link}
            />
          </div>
          <button type='submit' className="btn-primary w-full mt-[72px] text-center">
            {t("FORM.BUTTON.SIGNUP")}
          </button>
        </form>
      </div>
      <div className="mt-10 mb-[108px] flex md:hidden justify-center gap-10 px-6 text-black-alpha-900">
        <div className="p-6 card">
          <Tabs tabList={tabList} />
        </div>
      </div>
    </>
  )
}

import dynamic from 'next/dynamic'
import AuthLayout from "@/app/layouts/authLayout"
import { useTranslation } from '@/i18n'
 
const SignUpClient = dynamic(() => import('./client'), { ssr: false })

export default async function SignUp({
  params: { lng }
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng)

  return (
    <AuthLayout lng={lng}>
      <div className="md:pt-16 pt-[100px] flex justify-center">
        <img src="/images/logo.svg" />
      </div>
      <div className="mt-6 gap-2 flex flex-col text-center text-black-alpha-900">
        <h2 className="font-bold text-2xl leading-10">{t("AUTH.REGISTER.TITLE")}</h2>
        <div className="md:text-md text-sm">
          {t("AUTH.REGISTER.DESCRIPTIONS", { returnObjects: true }).map((text: string, index: number) => <p key={index}>{text}</p>)}
        </div>
      </div>
      <SignUpClient />
    </AuthLayout>
  )
}

import dynamic from 'next/dynamic'
import AuthLayout from '@/app/layouts/authLayout'
import SignUpIndividualClient from './client'

export default function SignUpIndividual({
  params: { lng }
}: {
  params: { lng: string }
}) {
  return (
    <AuthLayout lng={lng}>
      <SignUpIndividualClient />
    </AuthLayout>
  )
}

import dynamic from 'next/dynamic'
import AuthLayout from '@/app/layouts/authLayout'
import SignUpBusinessClient from './client'

export default function SignUpBusiness() {
  return (
    <AuthLayout>
      <SignUpBusinessClient />
    </AuthLayout>
  )
}

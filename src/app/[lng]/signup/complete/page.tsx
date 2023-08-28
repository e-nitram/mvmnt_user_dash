import dynamic from 'next/dynamic'
import AuthLayout from '@/app/layouts/authLayout'
import SignUpCompleteClient from './client'

export default function SignUpComplete() {
  return (
    <AuthLayout>
      <SignUpCompleteClient />
    </AuthLayout>
  )
}

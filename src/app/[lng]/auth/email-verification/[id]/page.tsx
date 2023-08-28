'use client'

import { useEffect, useContext } from 'react'
import { AuthContext } from '@/context'

export default function EmailVerification({
  params: { id },
  searchParams: { token }
}: {
  params: { id: string }
  searchParams: { token: string }
}) {
  const { emailVerify } = useContext(AuthContext)

  useEffect(() => {
    emailVerify(id, token)
  }, [])

  return null
}

import AuthLayout from "@/app/layouts/authLayout"

import RecoverCodeClient from "./client"

export default function RecoverCode() {
  return (
    <AuthLayout>
      <RecoverCodeClient />
    </AuthLayout>
  )
}

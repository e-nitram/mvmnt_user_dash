import AuthLayout from "@/app/layouts/authLayout"

import AuthAppClient from "./client"

export default function AuthApp() {
  return (
    <AuthLayout>
      <AuthAppClient />
    </AuthLayout>
  )
}

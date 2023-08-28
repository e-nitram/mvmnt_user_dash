import AuthLayout from "@/app/layouts/authLayout"
import SignInClient from "./client"

export default function SignIn() {
  return (
    <AuthLayout>
      <SignInClient />
    </AuthLayout>
  )
}

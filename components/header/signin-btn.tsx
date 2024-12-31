
import { signIn } from "@/auth"
import GoogleBtn from "./google-btn"

 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <GoogleBtn />
    </form>
  )
} 
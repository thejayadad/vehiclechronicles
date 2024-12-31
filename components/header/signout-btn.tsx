
import { signOut } from "@/auth"
import { FiLogOut } from "react-icons/fi"
 
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="px-4 py-3 rounded-md transition-all duration-200 border border-text-gray-500" type="submit">
        <FiLogOut />
      </button>
    </form>
  )
} 
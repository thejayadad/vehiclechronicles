
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
      <button className="px-4 py-3 lg:py-4 flex items-center rounded-md transition-all duration-200 border border-text-gray-500" type="submit">
        <FiLogOut />
      </button> 
    </form>
  )
} 
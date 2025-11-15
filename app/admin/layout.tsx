import { getServerSession } from "next-auth"
import authOptions from "../auth/auth"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  if (!session) return null
  
  return <>{children}</>
}
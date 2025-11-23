import { getServerSession } from "next-auth"
import authOptions from "@/auth/auth"
import {ReactNode} from "react"

export default async function AdminLayout({ children }: { children: ReactNode }) {
    const session = await getServerSession(authOptions)

    if (!session) return null
  
    return <>{children}</>
}
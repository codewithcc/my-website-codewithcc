import { Metadata } from "next"
import { getServerSession } from "next-auth"
import authOptions from "../auth/auth"
import SignOutButton from "../components/Sign-Out-Button"
import Image from "next/image"
import { assets } from "../assets/assets"

export const metadata: Metadata = {
    title: 'Admin Dashboard - Code with Cc Portfolio Management',
    description: "Centralized control panel for website administration. Manage projects, services, content, and user accounts"
}

export default async function AdminPage() {
    const session = await getServerSession(authOptions)

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="hidden flex-col items-center justify-center lg:flex">
                <h1 className="text-5xl">Welcome, <span className="font-black">{session?.user?.name}</span></h1>
                <p className="text-2xl mt-4">email: <span className="font-black">{session?.user?.email}</span></p>
                <div className="flex items-center mt-6 gap-12 text-2xl mb-12">
                    <a href="/admin/projects" className="flex items-center rounded-full ring-1 ring-gray-500 px-4 py-1.5">
                        <Image src={assets.ArrowDark} alt="arrow" className="w-6 h-auto" />
                        Projects
                    </a>
                    <a href="/admin/services" className="flex items-center rounded-full ring-1 ring-gray-500 px-4 py-1.5">
                        <Image src={assets.ArrowDark} alt="arrow" className="w-6 h-auto" />
                        Services
                    </a>
                </div>
                <SignOutButton />
            </div>

            <div className="flex flex-col items-center justify-center text-center gap-2 lg:hidden">
                <Image src={assets.ErrorIcon} alt="error" className="w-12 h-auto" />
                <p className="text-lg">Sorry! Admin feature only available for desktop mode.</p>
            </div>
        </div>
    )
}
"use client"

import { signOut, useSession } from "next-auth/react"

const Admin = () => {
    const { data: session } = useSession()

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="hidden lg:flex flex-col items-center justify-center gap-6">
                <h1 className="text-3xl">You are signed in as: <span className="font-black">{session?.user?.email}</span></h1>
                <button className="cursor-pointer bg-blue-800 text-white text-2xl px-8 py-2 rounded-full" onClick={() => signOut({ callbackUrl: '/admin' })}>Sign Out</button>
            </div>
            <h1 className="lg:hidden text-lg">Use desktop/laptop to use the admin utilities</h1>
        </div>
    )
}

export default Admin
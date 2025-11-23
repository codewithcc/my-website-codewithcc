"use client"

import { signOut } from "next-auth/react"
import Image from "next/image"
import { assets } from "@/lib/assetsProvider"

const SignOutButton = () => {
    return <button onClick={() => signOut({ callbackUrl: '/auth/sign-in' })} className="flex items-center cursor-pointer bg-red-500 text-white px-6 text-xl rounded-full py-2 gap-2"><Image src={assets.SignOutIcon} alt="signout" className="w-6 h-auto" />Sign Out</button>
}

export default SignOutButton
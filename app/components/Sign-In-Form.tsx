"use client"

import { useState, FormEvent } from "react"
import { signIn } from "next-auth/react"
import Image from "next/image"
import { assets } from "@/app/assets/assets"

const SignInForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        const result = await signIn('credentials', {
            redirect: false,
            username,
            password,
            callbackUrl: '/admin'
        })

        setLoading(false)
        if (result?.error) {
            setError("Sign in failed. Check your username and password.")
        } else {
            setUsername("")
            setPassword("")
            window.location.href = result?.url || '/admin'
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-[320px] rounded-lg shadow-2xl p-6 cursor-default">
            <h1 className="text-3xl font-black">Admin - Sign In</h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full mt-12 gap-4">
                <input type="text" name="username" id="username" placeholder="Enter your username" required className="w-full ring-1 ring-gray-500 px-2 rounded-md py-1 cursor-text focus:outline-0" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" id="password" placeholder="Enter your password" required className="w-full ring-1 ring-gray-500 px-2 rounded-md mt-3 py-1 cursor-text focus:outline-0" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="mt-12 w-full rounded-md py-1 cursor-pointer bg-black text-white disabled:bg-gray-500 disabled:cursor-not-allowed" disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
            </form>

            { error && <div className="flex items-center justify-between w-full mt-4 bg-red-200 rounded-md px-2 py-1">
                <div className="flex items-center gap-2">
                    <Image src={assets.ErrorIcon} alt="error" className="w-6 h-auto" />
                    <p className="text-red-800">{error}</p>
                </div>
                <Image src={assets.ErrorCloseIcon} alt="error close" className="w-4 h-auto cursor-pointer" onClick={() => setError(null)} />
            </div>}
        </div>
    )
}

export default SignInForm
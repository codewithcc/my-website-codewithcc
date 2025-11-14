"use client"

import { useState, FormEvent } from "react"
import { signIn } from "next-auth/react"
import Image from "next/image"
import { assets } from "../assets/assets"
import { useRouter } from "next/navigation"

const LogIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)

        const result = await signIn('credentials', {
            redirect: false,
            username,
            password,
            callbackUrl: '/admin'
        })

        if (result?.error) {
            if (result.error === "CredentialsSignin") setError("Invalid credentials.")
            else setError("Something went wrong. Try again.")
        } else {
            router.push(result?.url || '/admin')
        }
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center cursor-default">
            <div className="hidden lg:flex flex-col items-center justify-center bg-blue-100 p-4 py-12 rounded-lg gap-8">
                <h1 className="text-3xl font-bold text-blue-800">Sign In</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-xl cursor-text">
                    <input className="bg-blue-300 text-blue-800 px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800" type="text" name="username" id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input className="bg-blue-300 text-blue-800 px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800" type="password" name="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" className="cursor-pointer bg-blue-800 text-white py-2 rounded-lg mt-4">Submit</button>
                </form>
            </div>

            {error != null &&
                <div className="flex items-center gap-2 bg-red-200 px-4 rounded-lg mt-8">
                    <h2>{error}</h2>
                    <Image className="w-4 h-auto cursor-pointer" src={assets.ErrorCloseIcon} alt="close icon" onClick={() => setError(null)} />
                </div>
            }

            <h1 className="text-lg lg:hidden">Use desktop/laptop to use the admin utilities</h1>
        </div>
    )
}

export default LogIn
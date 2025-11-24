"use client"

import Image from "next/image"
import { assets } from "@/lib/assetsProvider"
import { FormEvent, useState } from "react"
import { SendMessageApi } from "@/lib/data"

const Contact = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean | null>(null)

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        const payload = {
            name, email, message
        }
        const response = await SendMessageApi.sendMessage(payload)
        setError(!response.success)
        if (response.success) {
            setName("")
            setEmail("")
            setMessage("")
        }
        setLoading(false)
    }

    return (
        <div id="contact" className="z-50 flex flex-col cursor-default scroll-mt-32 items-center">
            <div className="flex flex-col items-center">
                <h3 className="text-xl">Connect with Me</h3>
                <h2 className="text-5xl font-black mt-2">Get in touch</h2>
                <p className="text-center px-6 text-lg text-slate-500 mt-6 lg:w-[800px]">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-6 w-full px-8 text-lg lg:w-[500px] mt-12 lg:px-0 lg:text-[16px]">
                <div className="flex flex-col items-center justify-center gap-4 w-full lg:flex-row">
                    <input value={name} onChange={(e) => setName(e.currentTarget.value)} className="bg-white ring ring-slate-500 px-3 py-2 w-full rounded-lg lg:px-2 lg:py-1" type="text" name="name" placeholder="Enter your name" required />
                    <input value={email} onChange={(e) => setEmail(e.currentTarget.value)} className="bg-white ring ring-slate-500 px-3 py-2 w-full rounded-lg lg:px-2 lg:py-1" type="email" name="email" placeholder="Enter your email" required />
                </div>
                <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)} className="bg-white ring ring-slate-500 p-3 w-full rounded-lg lg:p-2" name="message" placeholder="Enter your message" rows={5} required></textarea>
                <button type="submit" className="flex items-center justify-center gap-2 mt-2 bg-black text-white px-8 py-3 cursor-pointer rounded-full">{error == null && loading ? "Submitting..." : "Submit"} {(error == null && !loading) && <Image src={assets.RightArrowLight} alt="Right arrow" className="w-6 h-auto" loading="lazy" />}</button>

                {error != null && <p className={`px-4 py-2 rounded-lg flex items-center justify-center gap-2 ${error ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"}`}><Image src={error ? assets.ErrorIcon : assets.SuccessIcon} alt="status icon" className="w-6 h-auto" loading="lazy" /> {error? "Can't send message" : "Message send successfully"} <Image onClick={() => setError(null)} src={error ? assets.ErrorCloseIcon : assets.SuccessCloseIcon} alt="close icon" className="w-4 h-auto cursor-pointer" loading="lazy" /></p>}
            </form>
        </div>
    )
}

export default Contact
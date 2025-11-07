"use client"

import Image from "next/image"
import { assets } from "../assets/assets"
import { FormEvent, useState } from "react"

const Contact = () => {
    const [success, setSuccess] = useState<Boolean | null>(null)
    const [message, setMessage] = useState<string>("")

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSuccess(null)
        setMessage("Submitting...")

        const form = event.currentTarget
        const formData = new FormData(form);

        const res = await fetch("/api/contact", {
            method: "POST",
            body: formData,
        }).then((res) => res.json())
        
        setSuccess(res.success)
        if (res.success) {
            setMessage(res.message || "Form submitted successfully!")
            form.reset()
        } else {
            setMessage(res.message || "Sorry! Something went wrong.")
        }
    }

    return (
        <div id="contact" className="z-50 flex flex-col cursor-default scroll-mt-32 items-center">
            <div className="flex flex-col items-center">
                <h3 className="text-xl">Connect with Me</h3>
                <h2 className="text-5xl font-black mt-2">Get in touch</h2>
                <p className="text-center px-6 text-lg text-slate-500 mt-6 lg:w-[800px]">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
            </div>

            <form onSubmit={onSubmit} data-lp-ignore="true" className="flex flex-col items-center justify-center gap-6 w-full px-8 text-lg lg:w-[500px] mt-12 lg:px-0 lg:text-[16px]">
                <div className="flex flex-col items-center justify-center gap-4 w-full lg:flex-row">
                    <input className="ring ring-slate-500 px-3 py-2 w-full rounded-lg lg:px-2 lg:py-1" type="text" name="name" placeholder="Enter your name" required />
                    <input className="ring ring-slate-500 px-3 py-2 w-full rounded-lg lg:px-2 lg:py-1" type="email" name="email" placeholder="Enter your email" required />
                </div>
                <textarea className="ring ring-slate-500 p-3 w-full rounded-lg lg:p-2" name="message" placeholder="Enter your message" rows={5} required></textarea>
                <button type="submit" className="flex items-center justify-center gap-2 mt-2 bg-black text-white px-8 py-3 cursor-pointer rounded-full">{success == null && message === 'Submitting...' ? message : "Submit"} { (success == null && message != 'Submitting...') && <Image src={assets.RightArrowLight} alt="Right arrow" className="w-6 h-auto" />}</button>

                { success != null && <p className={`px-4 py-2 rounded-lg flex items-center justify-center gap-2 ${success ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}><Image src={success ? assets.SuccessIcon : assets.ErrorIcon} alt="status icon" className="w-6 h-auto" /> {message} <Image onClick={() => setSuccess(null)} src={success ? assets.SuccessCloseIcon : assets.ErrorCloseIcon} alt="close icon" className="w-4 h-auto cursor-pointer" /></p> }
            </form>
        </div>
    )
}

export default Contact
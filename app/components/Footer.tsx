"use client"

import Image from "next/image"
import { assets, socialIcons } from "@/app/assets/assets"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full px-4 pt-2 pb-8 bg-pink-50 lg:pb-6 cursor-default">
            <Image src={assets.Logo} alt="logo icon" loading="lazy" />
            <a href="mailto:codewithcc.dev@gmail.com">codewithcc.dev@gmail.com</a>
            <div className="flex items-center justify-center mt-4 gap-8 lg:gap-12">
                {
                    socialIcons.map(({icon, link}, id) => (
                        <Image key={id} onClick={(e) => { e.preventDefault(); window.open(link, '_blank', ) }} src={icon} alt="social icon" className="w-8 h-auto transition-all ease-linear duration-150 cursor-pointer hover:scale-125 lg:w-6" loading="lazy" />
                    ))
                }
            </div>
            <hr className="w-full mt-4" />
            <div className="flex flex-col items-center justify-center w-full mt-4 lg:flex-row lg:justify-around">
                <p>&copy; <span className="text-red-500 font-semibold">{new Date().getFullYear()}</span> Code with Cc. All rights reserved.</p>
                <div className="flex flex-wrap space-x-4 space-y-2 items-center justify-center font-semibold mt-2 lg:flex-row lg:space-x-0 lg:space-y-0 lg:gap-6 lg:font-normal">
                    <a className="hover:bg-pink-200 px-2 rounded-full transition-all ease-linear duration-150 lg:px-4 hover:text-pink-800" href="/terms">Terms of Services</a>
                    <a className="hover:bg-pink-200 px-2 rounded-full transition-all ease-linear duration-150 lg:px-4 hover:text-pink-800" href="/policy">Privacy Policy</a>
                    <a className="hover:bg-pink-200 px-2 rounded-full transition-all ease-linear duration-150 lg:px-4 hover:text-pink-800" href="https://www.linkedin.com/in/codewithcc/" target="_blank" rel="noopener noreferrer">Connect with Me</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
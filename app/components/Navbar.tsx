"use client"

import Image from "next/image";
import { assets } from "@/app/assets/assets";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ navList }: { navList: { link: string, label: string }[] }) => {
    const sideMenuRef = useRef<HTMLUListElement>(null)
    const [isScroll, setIsScroll] = useState(false)
    const openMenu = () => {
        if (sideMenuRef.current)
            sideMenuRef.current.style.transform = 'translateX(-13rem)'
    }
    const closeMenu = () => {
        if (sideMenuRef.current)
            sideMenuRef.current.style.transform = 'translateX(13rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsScroll(scrollY > 50)
        })
    }, [])

    return (
        <>
            <div className="fixed top-0 z-10 w-[75%] right-1/2 translate-x-1/2 -mt-[40%]">
                <Image src={assets.HeaderBG} alt="header bg" loading="lazy" />
            </div>
            <nav className={`flex items-center justify-between lg:px-12 py-3 lg:py-4 fixed top-0 z-100 w-full transition-all ease-in-out duration-300 ${isScroll? "bg-white/50 backdrop-blur-2xl" : ""}`}>
                <div>
                    <a href="#top"><Image src={assets.Logo} alt="logo icon" className="w-[200px] h-auto" loading="lazy" /></a>
                </div>

                <ul className={`hidden lg:flex items-center justify-center gap-12 px-8 py-2 rounded-full ${isScroll ? "" : "bg-white/50 shadow-2xl shadow-gray-300"}`}>
                    {
                        navList.map(({link, label}, id) => (
                            <li key={id}>
                                <a href={link}>{label}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className="hidden lg:flex items-center justify-center gap-8">
                    <a href="#contact" className="flex items-center justify-center gap-2 outline-2 outline-slate-500 py-2 px-6 rounded-full bg-white">
                        Contact <Image className="w-6 h-auto" src={assets.ArrowDark} alt="arrow" loading="lazy" />
                    </a>
                </div>

                <button className="cursor-pointer block pr-4 lg:hidden" onClick={openMenu}>
                    <Image className="w-12 h-auto" src={assets.Menu} alt="menu" loading="lazy" />
                </button>
            </nav>
            <ul ref={sideMenuRef} className="flex flex-col gap-8 h-screen bg-black text-white w-[200px] p-4 text-xl lg:hidden fixed z-200 top-0 bottom-0 -right-52 transition-all ease-linear duration-300">
                <li>
                    <button className="absolute right-6" onClick={closeMenu}>
                        <Image loading="lazy" src={assets.Close} alt="close" className="w-8 h-auto" />
                    </button>
                </li>
                {
                    navList.map(({link, label}, id) => (
                        <li key={id}>
                            <a onClick={closeMenu} href={link}>{label}</a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Navbar;
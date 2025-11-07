import Image from "next/image"
import { assets } from "../assets/assets"

const Header = () => {
    return (
        <div id="top" className="mt-32 z-50 flex flex-col items-center scroll-mt-32 cursor-default">
            <div>
                <Image src={assets.ProfileImgRound} alt="profile image" className="w-32 rounded-full" />
            </div>
            <h3 className="text-xl mt-4 lg:text-2xl">Hi, I'm Chanchal Roy 👋🏻</h3>
            <h1 className="text-center text-3xl font-black px-6 mt-2 lg:text-6xl lg:mt-6 lg:w-[75%]">Software Developer based in India.</h1>
            <p className="text-center px-2 mt-6 lg:text-lg lg:mt-12 lg:w-[80%]">A software developer from India with 3 years of experience building end-to-end solutions, from design to deployment.</p>
            <div className="flex flex-col items-center justify-center gap-4 text-lg w-[75%] mt-8 lg:mt-12 lg:flex-row lg:w-[50%] lg:gap-12">
                <a  className="flex items-center justify-center gap-2 bg-black text-white rounded-full w-full py-3" href="#contact">Contact with Me <Image className="w-6 h-auto" src={assets.RightArrowLight} alt="right arrow" /></a>
                <a  className="flex items-center justify-center gap-2 outline-2 outline-slate-500 rounded-full w-full py-2.5" href="/my-resume.pdf" download>My Resume <Image className="w-6 h-auto" src={assets.DownloadArrow} alt="dowmlaod icon" /></a>
            </div>
        </div>
    )
}

export default Header
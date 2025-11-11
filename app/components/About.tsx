import Image from "next/image"
import { assets, infoList, toolsData } from "@/app/assets/assets"

const About = () => {
    return (
        <div id="about" className="flex flex-col items-center z-50 scroll-mt-32 cursor-default">
            <h3 className="text-xl">Introduction</h3>
            <h2 className="text-5xl font-black mt-2">About Me</h2>

            <div className="flex flex-col items-center mt-12 lg:flex-row lg:items-start gap-8 lg:gap-16">
                <div className="w-[300px] relative aspect-9/13">
                    <Image src={assets.ProfileImage} alt="Profile Image" className="rounded-2xl object-cover" fill loading="lazy" />
                </div>
                <div className="flex flex-col px-12 lg:p-0 lg:w-[800px]">
                    <p className="text-lg text-slate-500 text-center lg:text-start lg:text-[16px]">I am a software developer based in India with 3 years of hands-on experience building and deploying end-to-end solutions. As a self-driven developer, I have a proven track record of taking freelance projects from initial design and development through to final deployment and maintenance, with a strong focus on Android applications.</p>
                    <ul className="flex flex-col gap-8 mt-8 lg:flex-row lg:mt-12">
                        {
                            infoList.map(({ icon, title, description }, id) => (
                                <li key={id} className="bg-white border border-slate-500 rounded-2xl p-6 cursor-pointer transition-all ease-linear duration-300 hover:shadow-[8px_8px_0_#000000] lg:hover:shadow-[4px_4px_0_#000000] lg:w-[200px] hover:bg-pink-100">
                                    <Image src={icon} alt="Icon" className="w-12 h-auto lg:w-8" loading="lazy" />
                                    <h2 className="text-2xl font-black mt-6 lg:text-lg lg:mt-4">{title}</h2>
                                    <p className="text-slate-500 mt-2 lg:text-sm">{description}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex flex-col mt-12 items-center lg:items-start">
                        <h2 className="text-xl lg:text-[16px] text-slate-500">tools i used</h2>
                        <ul className="flex flex-wrap gap-6 mt-4 items-center justify-center">
                            {
                                toolsData.map((tool, id) => (
                                    <li key={id} className="w-8 lg:w-8">
                                        <Image src={tool} alt="Tool" loading="lazy" />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
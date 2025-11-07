import Image from "next/image"
import { assets, servicesData } from "../assets/assets"

const Services = () => {
    return (
        <div id="services" className="z-50 flex flex-col cursor-default scroll-mt-32 items-center">
            <div className="flex flex-col items-center">
                <h3 className="text-xl">What I Offers</h3>
                <h2 className="text-5xl font-black mt-2">My Services</h2>
                <p className="text-center px-6 mt-6 text-lg text-slate-500 lg:p-0 lg:w-[800px]">I am a software developer based in India with 3 years of hands-on experience building and deploying end-to-end solutions.</p>
            </div>

            <ul className="grid grid-cols-1 gap-8 mt-12 px-12 lg:p-0 lg:grid-cols-4">
                {
                    servicesData.map(({icon, title, description, link}, id) => (
                        <li key={id} className="border border-gray-500 rounded-lg p-6 transition-all ease-linear duration-300 hover:bg-pink-100 hover:shadow-[6px_6px_0_#000000] lg:p-4 lg:w-[250px] group">
                            <Image src={icon} alt="service icon" className="w-12 h-auto" />
                            <h2 className="text-3xl font-bold mt-8 lg:text-xl">{title}</h2>
                            <p className="text-slate-500 mt-2 text-justify leading-6 lg:text-[14px]">{description}</p>
                            <a href={link} className="inline-flex items-center mt-6 group-hover:bg-pink-300 px-4 rounded-full transition-all ease-linear duration-150">Read more <Image src={assets.RightArrowDark} alt="right arrow icon" className="w-6 h-auto" /></a>
                        </li>
                    ))
                }
            </ul>

            <a href="/services" className="flex items-center mt-20 border border-slate-500 px-8 py-2 rounded-full">Show more <Image src={assets.RightArrowDark} alt="right arrow icon" className="w-6 h-auto" /></a>
        </div>
    )
}

export default Services
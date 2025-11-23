import Image from "next/image"
import { assets } from "@/lib/assetsProvider"
import {ServiceSimpleType} from "@/types"

type Props = Omit<ServiceSimpleType, "_id" | "show" | "privacy">

const ServiceCard = (props: Props) => {
    return (
        <div className="border border-gray-500 rounded-lg p-6 transition-all ease-linear duration-300 bg-white hover:bg-pink-100 hover:shadow-[6px_6px_0_#000000] lg:p-4 lg:w-[250px] group">
            <Image loading="lazy" src={props.icon} alt="service icon" width={200} height={200} className="w-12 h-auto" />
            <h2 className="text-3xl font-bold mt-8 lg:text-xl">{props.title}</h2>
            <p className="text-slate-500 mt-2 text-justify leading-6 lg:text-[14px]">{props.description}</p>
            <a href={props.more} className="inline-flex items-center mt-6 group-hover:bg-pink-300 px-4 rounded-full transition-all ease-linear duration-150">Read more <Image loading="lazy" src={assets.RightArrowDark} alt="right arrow icon" className="w-6 h-auto" /></a>
        </div>
    )
}

export default ServiceCard
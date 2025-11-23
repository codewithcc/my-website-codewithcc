"use client"

import Image from "next/image"
import { assets } from "@/lib/assetsProvider"
import { useEffect, useState } from "react"
import { ServiceApi } from "@/lib/data"
import ServiceCard from "@/components/services/Service-Card"
import {ServiceType} from "@/types"

const Services = () => {
    const [services, setServices] = useState<ServiceType[]>([])

    const fetchServices = async () => {
        await ServiceApi.getShowServices()
            .then((data) => setServices(data))
    }

    useEffect(() => {
        fetchServices()
    }, [])

    return (
        <div id="services" className="z-50 flex flex-col cursor-default scroll-mt-32 items-center">
            <div className="flex flex-col items-center">
                <h3 className="text-xl">What I Offers</h3>
                <h2 className="text-5xl font-black mt-2">My Services</h2>
                <p className="text-center px-6 mt-6 text-lg text-slate-500 lg:p-0 lg:w-[800px]">I am a software developer based in India with 3 years of hands-on experience building and deploying end-to-end solutions.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-12 px-12 lg:p-0 lg:grid-cols-4">
                {
                    services.map((service) => (
                        <ServiceCard
                            key={service._id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            more={service.more}
                        />
                    ))
                }
            </div>

            <a href="/services" className="flex items-center mt-20 border bg-white border-slate-500 px-8 py-2 rounded-full">Show more <Image loading="lazy" src={assets.RightArrowDark} alt="right arrow icon" className="w-6 h-auto" /></a>
        </div>
    )
}

export default Services
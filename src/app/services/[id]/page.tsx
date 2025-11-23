import ServiceCard from "@/components/services/Service-Card"
import { ServiceApi } from "@/lib/data"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const service = await ServiceApi.getService(id)

    if (!service) return {
        title: "Service Not Found | Code with Cc",
        description: "Oops! The page you were looking for doesn't exist. Head back to the homepage to explore my projects and services."
    }

    return {
        title: `${service.title} - Service | Code with Cc`,
        description: service.description
    }
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const service = await ServiceApi.getService(id)
    if (!service) return (
        <div className="flex items-center justify-center h-screen">
            <h2>No Service Found</h2>
        </div>
    )

    return (
        <div className="flex items-center justify-center h-screen">
            <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                more={service.more}
            />
        </div>
    )
}
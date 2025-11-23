import { Metadata } from "next"
import ServiceManager from "@/components/services/Services-Manager"

export const metadata: Metadata = {
    title: "Admin - Manage Services & Offerings | Code with Cc",
    description: "Control the listing and details of your professional services. Update pricing, descriptions, and service packages instantly."
}

export default function Services() {
    return <ServiceManager />
}
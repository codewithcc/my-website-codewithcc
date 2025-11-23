import { Metadata } from "next"
import ProjectsManager from "@/components/projects/Projects-Manager"

export const metadata: Metadata = {
    title: "Admin - Manage Portfolio Projects & Case Studies | Code with Cc",
    description: "Easily add, edit, or delete portfolio items and case studies. Update project details, images, and performance metrics."
}

export default function Projects() {
    return <ProjectsManager />
}
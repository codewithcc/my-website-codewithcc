import ProjectCard from "@/components/projects/Project-Card"
import { ProjectApi } from "@/lib/data"
import { Metadata } from "next"

export async function generateMetadata({params}: {params: Promise<{id: string}>}): Promise<Metadata> {
    const {id} = await params
    const project = await ProjectApi.getProject(id)

    if (!project) return {
        title: "Project Not Found | Code with Cc",
        description: "Oops! The page you were looking for doesn't exist. Head back to the homepage to explore my projects and services."
    }

    return {
        title: `${project.title} | Code with Cc`,
        description: project.description
    }
}

export default async function ProjectPage({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const project = await ProjectApi.getProject(id)
    if (!project) return (
        <div className="flex items-center justify-center h-screen">
            <h2>No Project Found</h2>
        </div>
    )
    
    return (
        <div className="flex items-center justify-center h-screen">
            <ProjectCard
                bgImage={project.bgImage}
                title={project.title}
                description={project.description}
                github={project.github}
                demo={project.demo}
            />
        </div>
    )
}
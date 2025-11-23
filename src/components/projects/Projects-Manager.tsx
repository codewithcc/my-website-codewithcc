"use client"

import ProjectForm from "@/components/projects/Project-Form"
import ProjectListAdmin from "@/components/projects/Project-List-Admin"
import {useEffect, useState} from "react"
import {ProjectApi} from "@/lib/data"
import ModalDialog from "@/components/Modal-Dialog"
import {ProjectSimpleType} from "@/types"

const ProjectsManager = () => {
    const [currentProject, setCurrentProject] = useState<ProjectSimpleType | null>(null)
    const [projectList, setProjectList] = useState<ProjectSimpleType[]>([])
    const [loading, setLoading] = useState(true)
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [deleteId, setDeleteId] = useState<string | null>(null)

    const fetchProjects = async () => {
        try {
            const data = await ProjectApi.getProjects()
            setProjectList(data)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }
    const handleSubmit = async (data: ProjectSimpleType) => {
        try {
            setLoading(true)
            if (currentProject) {
                await ProjectApi.updateProject(data?._id!, data)
                setCurrentProject(null)
            } else {
                await ProjectApi.createProject(data)
            }

            await fetchProjects()
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }
    const onEdit = (data: ProjectSimpleType) => {
        setCurrentProject(data)
    }
    const onDelete = (id: string) => {
        setOpenDialog(true)
        setDeleteId(id)
    }
    const confirmDelete = async () => {
        try {
            setLoading(true)
            await ProjectApi.deleteProject(deleteId!)
            await fetchProjects()
            setDeleteId(null)
            setOpenDialog(false)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setOpenDialog(false)
            setDeleteId(null)
            setLoading(false)
        }
    }
    const onCancel = () => {
        setOpenDialog(false)
        setDeleteId(null)
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <>
            <div className="hidden lg:flex items-center justify-between h-screen mx-20">
                <ProjectForm data={currentProject} loading={loading} onSubmit={handleSubmit} />
                <ProjectListAdmin list={projectList} loading={loading} onEdit={onEdit} onDelete={onDelete} />
                { openDialog &&
                    <ModalDialog onOk={confirmDelete} onCancel={onCancel} />
                }
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-12 text-xl">
                    <a href="/admin" className="border-2 border-slate-800 px-4 py-1.5 rounded-full hover:bg-slate-300 transition-colors ease-linear duration-150">Go Admin</a>
                    <a href="/admin/services" className="border-2 border-slate-800 px-4 py-1.5 rounded-full hover:bg-slate-300 transition-colors ease-linear duration-150">Service Page</a>
                </div>
            </div>
            <div className="flex items-center justify-center h-screen lg:hidden">
                <h1 className="text-center px-4">Can't use admin site in mobile/table. Please use the desktop/laptop.</h1>
            </div>
        </>
    )
}

export default ProjectsManager
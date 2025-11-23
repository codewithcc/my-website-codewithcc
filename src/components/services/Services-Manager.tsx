"use client"

import {useEffect, useState} from "react"
import {ServiceApi} from "@/lib/data"
import ModalDialog from "@/components/Modal-Dialog"
import {ServiceSimpleType} from "@/types"
import ServiceForm from "@/components/services/Service-Form"
import ServiceListAdmin from "@/components/services/Service-List-Admin"

const ServicesManager = () => {
    const [currentService, setCurrentService] = useState<ServiceSimpleType | null>(null)
    const [serviceList, setServiceList] = useState<ServiceSimpleType[]>([])
    const [loading, setLoading] = useState(true)
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [deleteId, setDeleteId] = useState<string | null>(null)

    const fetchServices = async () => {
        try {
            const data = await ServiceApi.getServices()
            setServiceList(data)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }
    const handleSubmit = async (data: ServiceSimpleType) => {
        try {
            setLoading(true)
            if (currentService) {
                await ServiceApi.updateService(data?._id!, data)
                setCurrentService(null)
            } else {
                await ServiceApi.createService(data)
            }

            await fetchServices()
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }
    const onEdit = (data: ServiceSimpleType) => {
        setCurrentService(data)
    }
    const onDelete = (id: string) => {
        setOpenDialog(true)
        setDeleteId(id)
    }
    const confirmDelete = async () => {
        try {
            setLoading(true)
            await ServiceApi.deleteService(deleteId!)
            await fetchServices()
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
        fetchServices()
    }, [])

    return (
        <>
            <div className="hidden lg:flex items-center justify-between h-screen mx-20">
                <ServiceForm data={currentService} loading={loading} onSubmit={handleSubmit} />
                <ServiceListAdmin list={serviceList} loading={loading} onEdit={onEdit} onDelete={onDelete} />
                { openDialog &&
                    <ModalDialog onOk={confirmDelete} onCancel={onCancel} />
                }
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-12 text-xl">
                    <a href="/admin" className="border-2 border-slate-800 px-4 py-1.5 rounded-full hover:bg-slate-300 transition-colors ease-linear duration-150">Go Admin</a>
                    <a href="/admin/projects" className="border-2 border-slate-800 px-4 py-1.5 rounded-full hover:bg-slate-300 transition-colors ease-linear duration-150">Projects Page</a>
                </div>
            </div>
            <div className="flex items-center justify-center h-screen lg:hidden">
                <h1 className="text-center px-4">Can't use admin site in mobile/table. Please use the desktop/laptop.</h1>
            </div>
        </>
    )
}

export default ServicesManager
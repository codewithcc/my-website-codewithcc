"use client"

import {ProjectSimpleType} from "@/types"
import ProjectCardAdmin from "@/components/projects/Project-Card-Admin"
import {useState} from "react"

type Props = {
    list: ProjectSimpleType[] | []
    loading: boolean
    onEdit: (data: ProjectSimpleType) => void
    onDelete: (id: string) => void
}

const ProjectListAdmin = (props: Props) => {
    const [currentPage, setCurrentPage] = useState(0)
    const batch = 5
    const totalPage = Math.ceil(props.list.length / batch)

    const prevClick = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1)
    }
    const nextClick = () => {
        if (currentPage < totalPage - 1) setCurrentPage(currentPage + 1)
    }

    const currentList = props.list.slice(currentPage * batch, currentPage * batch + 5)

    if (props.loading) {
        return (
            <div className="flex items-center justify-center border-2 w-[600px] h-[450px] rounded-md border-slate-200 shadow-2xl">
                <h1 className="text-2xl font-semibold text-gray-900">Loading...</h1>
            </div>
        )
    } else {
        if (props.list.length == 0) {
            return (
                <div className="flex items-center justify-center border-2 w-[600px] h-[450px] rounded-md border-slate-200 shadow-2xl">
                    <h1 className="text-4xl font-semibold text-gray-900">No Projects</h1>
                </div>
            )
        } else {
            return (
                <div className="flex flex-col items-end justify-between border-2 min-w-[600px] min-h-[450px] p-4 rounded-md border-slate-200 shadow-2xl">
                    <h1 className="w-full text-2xl font-semibold">Projects</h1>
                    <div className="flex-1 flex flex-col items-center justify-start gap-2.5 my-4">
                        {
                            currentList.map((project: ProjectSimpleType) => (
                                <ProjectCardAdmin key={project._id} data={project} onEdit={props.onEdit} onDelete={props.onDelete} />
                            ))
                        }
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <button disabled={currentPage == 0} onClick={() => prevClick()} className="bg-blue-400 text-white px-4 rounded-md cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black">Prev</button>
                        <h3>{currentPage + 1} of {totalPage}</h3>
                        <button disabled={currentPage == totalPage - 1} onClick={() => nextClick()} className="bg-blue-400 text-white px-4 rounded-md cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black">Next</button>
                    </div>
                </div>
            )
        }
    }
}

export default ProjectListAdmin
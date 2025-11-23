"use client"

import {FormEvent, useEffect, useState} from "react"
import {ProjectSimpleType} from "@/types"

type Props = {
    data: ProjectSimpleType | null
    loading: boolean
    onSubmit: (data: ProjectSimpleType) => Promise<void>
}

const ProjectForm = (props: Props) => {
    const [image, setImage] = useState<string>(props.data?.bgImage || "")
    const [title, setTitle] = useState<string>(props.data?.title || "")
    const [desc, setDesc] = useState<string>(props.data?.description || "")
    const [github, setGithub] = useState<string>(props.data?.github || "")
    const [demo, setDemo] = useState<string>(props.data?.demo || "")
    const [privacy, setPrivacy] = useState<string>(props.data?.privacy || "No")
    const [show, setShow] = useState<string>(props.data?.show || "No")

    const resetForm = () => {
        setImage("")
        setTitle("")
        setDesc("")
        setGithub("")
        setDemo("")
        setPrivacy("No")
        setShow("No")
    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const data: ProjectSimpleType = {
            _id: props.data?._id!,
            title: title,
            description: desc,
            bgImage: image,
            github: github,
            demo: demo,
            show: show as "Yes" | "No",
            privacy: privacy as "Yes" | "No"
        }
        await props.onSubmit(data)
        resetForm()
    }

    useEffect(() => {
        setImage(props.data?.bgImage || "")
        setTitle(props.data?.title || "")
        setDesc(props.data?.description || "")
        setGithub(props.data?.github || "")
        setDemo(props.data?.demo || "")
        setShow(props.data?.show || "No")
        setPrivacy(props.data?.privacy || "No")
    }, [props.data])

    return (
        <form onSubmit={handleSubmit} onReset={resetForm} className="flex flex-col items-end justify-center outline-2 outline-gray-200 rounded-md shadow-2xl p-4 gap-4 cursor-default">
            <h1 className="text-start w-full text-2xl font-semibold">Create / Edit Project</h1>
            <div className="flex items-center justify-between gap-4 mt-4">
                <input disabled={props.loading} className="border-2 border-gray-300 px-2 focus:outline-none focus:border-black rounded-md" type="url" value={image!} placeholder="Enter image URL" onChange={e => setImage(e.target.value)} />
                <input disabled={props.loading} required className="border-2 border-gray-300 px-2 focus:outline-none focus:border-black rounded-md" type="text" value={title} placeholder="Enter title" onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="flex items-center justify-between gap-4">
                <input disabled={props.loading} className="border-2 border-gray-300 px-2 focus:outline-none focus:border-black rounded-md" type="url" value={github!} placeholder="Enter github URL" onChange={e => setGithub(e.target.value)} />
                <input disabled={props.loading} className="border-2 border-gray-300 px-2 focus:outline-none focus:border-black rounded-md" type="url" value={demo!} placeholder="Enter demo URL" onChange={e => setDemo(e.target.value)} />
            </div>
            <div className="flex items-center justify-between gap-4 w-full mt-2">
                <div className="w-full flex items-center gap-3">
                    <h3 className="font-semibold">Show</h3>
                    <div className="flex items-center gap-1.5">
                        <input disabled={props.loading} type="radio" id="show-yes" value="Yes" checked={show === "Yes"} onChange={e => setShow(e.target.value)} />
                        <label htmlFor="show-yes">Yes</label>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <input disabled={props.loading} type="radio" id="show-no" value="No" checked={show === "No"} onChange={e => setShow(e.target.value)} />
                        <label htmlFor="show-no">No</label>
                    </div>
                </div>
                <div className="w-full flex items-center gap-3">
                    <h3 className="font-semibold">Privacy</h3>
                    <div className="flex items-center gap-1.5">
                        <input disabled={props.loading} type="radio" id="privacy-yes" value="Yes" checked={privacy === "Yes"} onChange={e => setPrivacy(e.target.value)} />
                        <label htmlFor="privacy-yes">Yes</label>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <input disabled={props.loading} type="radio" id="privacy-no" value="No" checked={privacy === "No"} onChange={e => setPrivacy(e.target.value)} />
                        <label htmlFor="privacy-no">No</label>
                    </div>
                </div>
            </div>
            <textarea required className="w-full border-2 border-gray-300 px-2 focus:outline-none focus:border-black rounded-md mt-2" rows={4} value={desc} placeholder="Enter description" onChange={e => setDesc(e.target.value)} />
            <div className="flex items-center justify-center gap-8">
                <button disabled={props.loading} type="reset" className="cursor-pointer disabled:cursor-not-allowed disabled:text-black">Clear</button>
                <button disabled={props.loading} type="submit" className="bg-black text-white px-6 py-1 cursor-pointer rounded-md disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-black">Submit</button>
            </div>
        </form>
    )
}

export default ProjectForm
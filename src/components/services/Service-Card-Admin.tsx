"use client"

import Image from "next/image"
import {assets} from "@/lib/assetsProvider"
import {ServiceSimpleType} from "@/types"

type Props = {
    data: ServiceSimpleType
    onEdit: (data: ServiceSimpleType) => void
    onDelete: (id: string) => void
}

const ServiceCardAdmin = (props: Props) => {
    return (
        <div className="flex items-center justify-between gap-4 cursor-default bg-slate-100 px-4 py-2 rounded-md w-full">
            <div className="flex items-center justify-start gap-4">
                { props.data.icon !== "" && <Image
                    className="rounded-full aspect-square w-8 h-auto object-cover"
                    src={props.data.icon}
                    alt={props.data.title}
                    width={20}
                    height={20}/>
                }
                <h2 className="font-black text-ellipsis line-clamp-1 text-start">{props.data.title}</h2>
                <p className="text-slate-500 w-[200px] text-ellipsis line-clamp-1 text-sm">{props.data.description}</p>
            </div>
            <div className="flex items-center justify-center gap-4">
                <Image
                    className="w-6 h-auto"
                    src={props.data.show === "Yes" ? assets.StarFilledIcon : assets.StarIcon}
                    alt="star icon" />
                <Image
                    className="w-6 h-auto"
                    src={props.data.privacy === "Yes" ? assets.PrivateIcon : assets.GlobeIcon}
                    alt="privacy icon" />
                <button onClick={() => props.onEdit(props.data)} className="flex items-center justify-center bg-blue-300 w-[40px] rounded-md aspect-square cursor-pointer">
                    <Image className="w-6 h-auto" src={assets.EditIcon} alt="edit icon" />
                </button>
                <button onClick={() => props.onDelete(props.data._id)} className="flex items-center justify-center bg-red-300 w-[40px] rounded-md aspect-square cursor-pointer">
                    <Image className="w-6 h-auto" src={assets.DeleteIcon} alt="delete icon" />
                </button>
            </div>
        </div>
    )
}

export default ServiceCardAdmin
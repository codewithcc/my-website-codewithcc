"use client"

import Image from 'next/image'
import { assets } from "@/lib/assetsProvider"
import { useState } from 'react'
import {ProjectSimpleType} from "@/types"

type Props = Omit<ProjectSimpleType, "_id" | "show" | "privacy">

const ProjectCard = (props: Props) => {
    const [expand, setExpand] = useState(false)
    const CHAR_LIMIT = 50
    const longDesc = props.description.length > CHAR_LIMIT
    const desc = (expand || !longDesc) ? props.description : props.description.substring(0, CHAR_LIMIT) + '...'

    return (
        <div className="flex flex-col items-center justify-between bg-white w-[300px] rounded-xl overflow-hidden shadow-xl shadow-gray-300 lg:w-[250px] hover:bg-pink-100 group transition-all easing-linear duration-500 transform hover:-translate-y-3 h-fit">
            <div>
                <div className={props.bgImage === "" ? "object-cover h-[200px] lg:h-[150px] bg-gray-300" : ""}>
                    {props.bgImage !== "" && <Image loading="eager" src={props.bgImage} alt='project image' width={300} height={200} className='object-cover h-[200px] lg:h-[150px]' />}
                </div>
                <div className='flex flex-col p-4 pb-6'>
                    <h2 className='font-bold text-2xl lg:text-xl'>{props.title}</h2>
                    <p onClick={() => setExpand(!expand)} className='text-slate-500 mt-2 transition-all ease-linear duration-150 lg:text-sm'>{desc}</p>
                </div>
            </div>
            <div className='flex items-center w-full justify-between px-3 pb-4'>
                <button disabled={props.github === ""} className='flex items-center gap-2 border border-slate-500 text-lg px-6 py-1.5 rounded-full cursor-pointer lg:text-[14px] lg:px-4 lg:py-1 disabled:cursor-not-allowed' onClick={() => window.open(props.github)}><Image loading="lazy" src={assets.GithubIcon} alt='github icon' className='w-6 h-auto' /> Github</button>
                <button disabled={props.demo === ""} className='flex items-center text-lg lg:text-[14px] hover:bg-pink-300 px-4 py-1 rounded-full cursor-pointer transition-all easing-linear duration-300 disabled:cursor-not-allowed' onClick={() => window.open(props.demo)}>more <Image loading="lazy" src={assets.RightArrowDark} alt='right arrow icon' className='w-8 h-auto lg:w-6' /></button>
            </div>
        </div>
    )
}

export default ProjectCard
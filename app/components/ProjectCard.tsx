"use client"

import Image from 'next/image'
import { assets } from '@/app/assets/assets'
import { useState } from 'react'

interface ProjectCardType {
    id: string,
    title: string,
    description: string,
    bgImage: string,
    stack: string[],
    github: string,
    more: boolean
}

const ProjectCard = ({ id, title, description, bgImage, stack, github, more }: ProjectCardType) => {
    const [expand, setExpand] = useState(false)
    const CHAR_LIMIT = 50
    const longDesc = description.length > CHAR_LIMIT
    const desc = (expand || !longDesc) ? description : description.substring(0, CHAR_LIMIT) + '...'

    return (
        <div className="flex flex-col items-center justify-between bg-white w-[300px] rounded-xl overflow-hidden shadow-xl shadow-gray-300 lg:w-[250px] hover:bg-pink-100 group transition-all easing-linear duration-500 transform hover:-translate-y-3 h-fit">
            <div>
                <div className={bgImage == null ? "object-cover h-[200px] lg:h-[150px] bg-gray-300" : ""}>
                    {bgImage != null && <Image loading="eager" src={bgImage} alt='project image' width={300} height={200} className='object-cover h-[200px] lg:h-[150px]' />}
                </div>
                <div className='flex flex-col p-4 pb-6'>
                    <h2 className='font-bold text-2xl lg:text-xl'>{title}</h2>
                    <p onClick={() => setExpand(!expand)} className='text-slate-500 mt-2 transition-all ease-linear duration-150 lg:text-sm'>{desc}</p>
                    <ul className='flex flex-wrap gap-3 mt-4'>
                        { (stack.length > 0) &&
                            stack.map((tech, id) => (
                                <li key={id}>
                                    <p className='bg-gray-200 lg:text-[12px] px-2 rounded-md group-hover:bg-pink-300 transition-all easing-linear duration-300'>{tech}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='flex items-center w-full justify-between px-3 pb-4'>
                <a aria-disabled={!github} className='flex items-center gap-2 border border-slate-500 text-lg px-6 py-1.5 rounded-full lg:text-[14px] lg:px-4 lg:py-1 disabled:cursor-not-allowed' href={github} target='_blank' rel='noopener noreferer'><Image loading="lazy" src={assets.GithubIcon} alt='github icon' className='w-6 h-auto' /> Github</a>
                <a aria-disabled={!more} className='flex items-center text-lg lg:text-[14px] hover:bg-pink-300 px-4 py-1 rounded-full transition-all easing-linear duration-300 disabled:cursor-not-allowed' href={`/projects/${id}`}>more <Image loading="lazy" src={assets.RightArrowDark} alt='right arrow icon' className='w-8 h-auto lg:w-6' /></a>
            </div>
        </div>
    )
}

export default ProjectCard
"use client"

import Image from 'next/image'
import { assets } from '../assets/assets'
import { useState } from 'react'

type ProjectCardProps = {
  title: string
  description: string
  image: string
  githubUrl: string
  demoUrl: string
  techStack: string[]
}

const ProjectCard = ({title, description, image, githubUrl, demoUrl, techStack}: ProjectCardProps) => {
    const [expand, setExpand] = useState(false)
    const CHAR_LIMIT = 50
    const longDesc = description.length > CHAR_LIMIT
    const desc = (expand || !longDesc) ? description : description.substring(0, CHAR_LIMIT) + '...'

    return (
        <div className='flex flex-col w-[300px] bg-white rounded-xl overflow-hidden shadow-xl shadow-gray-300 lg:w-[250px] hover:bg-pink-100 group transition-all easing-linear duration-500 transform hover:-translate-y-3 h-fit'>
            <div>
                <Image src={image} alt='project image' width={300} height={200} className='object-cover h-[200px] lg:h-[150px]' />
            </div>
            <div className='flex flex-col p-4 pb-6'>
                <h2 className='font-bold text-2xl lg:text-xl'>{title}</h2>
                <p onClick={() => setExpand(!expand)} className='text-slate-500 mt-2 transition-all ease-linear duration-150 lg:text-sm'>{desc}</p>
                <ul className='flex flex-wrap gap-3 mt-4'>
                    {
                        techStack.map((tech, id) => (
                            <li key={id}>
                                <p className='bg-gray-200 lg:text-[12px] px-2 rounded-md group-hover:bg-pink-300 transition-all easing-linear duration-300'>{tech}</p>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex items-center mt-8 w-full justify-between'>
                    <a className='flex items-center gap-2 border border-slate-500 text-lg px-6 py-1.5 rounded-full lg:text-[14px] lg:px-4 lg:py-1' href={githubUrl}><Image src={assets.GithubIcon} alt='github icon' className='w-6 h-auto' /> Github</a>
                    <a className='flex items-center text-lg lg:text-[14px] hover:bg-pink-300 px-4 py-1 rounded-full transition-all easing-linear duration-300' href={demoUrl}>Demo <Image src={assets.RightArrowDark} alt='right arrow icon' className='w-8 h-auto lg:w-6' /></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
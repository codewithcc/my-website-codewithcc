import { assets, workData } from "../assets/assets"
import ProjectCard from "./ProjectCard"
import Image from "next/image"

const Projects = () => {
    return (
        <div id="works" className="z-50 flex flex-col cursor-default scroll-mt-32 items-center">
            <div className="flex flex-col items-center">
                <h3 className="text-xl">My Portfolio</h3>
                <h2 className="text-5xl font-black mt-2">My latest work</h2>
                <p className="text-center px-6 text-lg text-slate-500 mt-6 lg:w-[800px]">Welcome to my software development portfolio! Explore a collection of projects showcasing my expertise in innovations.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4">
                {
                    workData.map(({title, description, bgImage, github, demo}, id) => (
                        <ProjectCard
                            key={id}
                            title={title}
                            description={description}
                            image={bgImage}
                            githubUrl={github}
                            demoUrl={demo}
                            techStack={['Next.js', 'Firebase', 'Tailwind CSS', 'Jetpack Compose']}
                        />
                    ))
                }
            </div>
            <a href="/projects" className="flex items-center mt-20 border border-slate-500 px-8 py-2 rounded-full">Show more <Image src={assets.RightArrowDark} alt="right arrow icon" className="w-6 h-auto" /></a>
        </div>
    )
}

export default Projects
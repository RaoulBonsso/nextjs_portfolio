import data from "@/data/projects"
import Heading from "./Heading"
import SectionWrapper from "./SectionWrapper"
import Image from "next/image"

const Projects = () => {
  return (
    <SectionWrapper>
        <Heading>projects</Heading>
        {data.map(projects =>(
            <div key={projects.id} className="flex flex-wrap gap-5 w-full lg:w-8/12 mb-10">
                <div className="relative w-full md:w-[120px] h-[120px] md:h-20 rounded-lg overflow-hidden">
                    <Image src={projects.image} fill className="w-full h-full" alt="project image"/>
                </div>
                <div className="flex-1"> <h2 className="text-xl font-bold text-zinc-700 dark:text-zinc-400 leading-[25px]">{projects.title}</h2> <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mt-2.5">{projects.description.length > 100 ? <span>{projects.description.slice(0,100)}...</span> : projects.description }</p></div>
            </div>
        ))}
    </SectionWrapper>
  )
}

export default Projects
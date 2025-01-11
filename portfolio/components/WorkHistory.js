import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/work";
import Image from "next/image";

const WorkHistory = () => {
  return (
    <SectionWrapper>
        <Heading>work history</Heading>
        {data.map(work => (
            <div className="mt-6 flex gap-x-6" key={work.id}>
                <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border dark:border-zinc-700">
                    <Image
                        src={work.image}
                        fill
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-black dark:text-white capitalize font-bold text-base xl:text-lg">{work.role}</h2>
                    <span className="capitalize text-sm font-bold text-zinc-500">{work.company}</span>
                </div>
            </div>
        ))}
    </SectionWrapper>
  )
}

export default WorkHistory
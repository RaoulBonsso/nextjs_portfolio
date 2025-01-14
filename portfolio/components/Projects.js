'use client'
import data from "@/data/projects";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import Model from "./Model";
import { useState } from "react";

const Projects = () => {
  const [state, setState] = useState(false);
  const toggleModel = () =>{
    setState(!state);
 
  }
  const [details,setDetails] = useState(null);

  return (
    <>
    <Model state={state} details={details} toggleModel={toggleModel} />
        <SectionWrapper>
      <Heading>projects</Heading>
      {data.map((projects) => (
        <div
          key={projects.id}
          className="flex flex-wrap gap-5 w-full lg:w-8/12 mb-10"
        >
          <div className="relative w-full md:w-[120px] pt-[56.25%] md:pt-0 md:h-20 rounded-lg overflow-hidden">
            <Image
              src={projects.image}
              fill
              className="w-full h-full absolute top-0 bottom-0 left-0 right-0"
              alt="project image"
            />
          </div>
          <div className="flex-1">
            <div className="flex space-x-3">
            <h2 className="text-lg md:text-xl font-bold text-zinc-700 dark:text-zinc-400 leading-[25px]">
              {projects.title}
            </h2>
              <FaArrowTrendUp className="text-[20px] text-zinc-900 dark:text-white cursor-pointer" onClick={()=>{
                toggleModel();
                console.log("click")
                setDetails(projects)
              }}/>

            </div>
      

            <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mt-2.5">
              {projects.description.length > 100 ? (
                <span>{projects.description.slice(0, 100)}...</span>
              ) : (
                projects.description
              )}
            </p>
          </div>
        </div>
      ))}
    </SectionWrapper>
    </>

  );
};

export default Projects;

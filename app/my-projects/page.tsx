
import ProjectCard from "../components/ProjectCard"
import { WebProjects } from "../constants/index"
import React from "react"

const Page = () => {
  return (
    <div 
    style={{ backgroundImage: "url(/mountains.jpg)" }}
    className="z-[1] w-screen h-screen flex items-center justify-center bg-center bg-cover">
      <h1 className="font-semibold text-white text-[40px] mr-16">
      <br></br>W
      <br></br> E
      <br></br>B
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
             {" "} 
            <br></br> D<br></br>
             E<br></br>
             V{" "} 
            </span>
            </h1>
    <div
    className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
      {WebProjects.map((project,index)=>(
        <ProjectCard
        key={index}
        title={project.title}
        text={project.text}
        image={project.src}
        />

      ))}
    </div>
    
    </div>
  )
}

export default Page

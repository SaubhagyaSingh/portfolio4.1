import ProjectCard from "../components/ProjectCard"
import { WebProjects } from "../constants/index"
import React from "react"

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.webp)" }}
      className="z-[1] w-screen min-h-screen bg-center bg-cover px-4 py-8 overflow-y-auto"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-white text-3xl md:text-5xl mb-10 text-center">
          WEB
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ml-2">
            DEV
          </span>
        </h1>

        {/* Scrollable container for the grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl overflow-y-auto max-h-[80vh]">
          {WebProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page

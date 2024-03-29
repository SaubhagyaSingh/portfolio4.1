"use client"


import AppCard from "../components/AppCard";
import { AppProjects } from "../constants/index"
import React from "react"


const Page = () => {
  return (
    <div 
    style={{ backgroundImage: "url(/mountains.jpg)" }}
    className="z-[1] w-screen h-screen flex items-center justify-center bg-center bg-cover">
     <h1 className="font-semibold text-white text-[40px] mr-16">
      <br></br>A
      <br></br>P
      <br></br>P
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
             {" "} 
            <br></br> D<br></br>
             E<br></br>
             V{" "} 
            </span>
            </h1>
    <div
    className="grid grid-cols-2  md:grid-cols-4 gap-8 max-w-[100%] max-h-[100%]">
      {AppProjects.map((project,index)=>(
        <AppCard
        key={index}
        text={project.text}
        title={project.title}
        image={project.src}
        />
        
        ))}
    </div>
    
    </div>
  )
}

export default Page

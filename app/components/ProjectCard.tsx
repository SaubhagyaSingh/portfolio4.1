"use client"
import React, { useState } from "react"
import {motion} from "framer-motion"

interface Props{
    image:string;
    title:string;
    text:string;
}

const ProjectCard = ({image,title,text}:Props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  

  function handleFlip(){
    if(!isAnimating){
        setIsFlipped(!isFlipped)
        setIsAnimating(true)
    }
  }
    return (
    <div 
    onClick={handleFlip}
    className="w-[200px] h-[100px] md:w-[420px] md:h-[240px] rounded-md cursor-pointer md:m-4">
      <motion.div
      className="flip-card-inner w-full h-full"
      initial={false}
      animate={{rotateY: isFlipped ? 180 : 360}}
      transition={{duration:0.6,animationDuration:"normal"}}
      onAnimationComplete={()=>setIsAnimating(false)}
        >

            <div 
            style={{backgroundImage:`url(${image})`}}
            className="w-full group relative h-full flip-card-front bg-contain bg-no-repeat bg-center rounded-lg p-4 border border-blue-400">
                <div
                className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40"
                />
                <div className="absolute inset-0 w-full h-full text-[10px] md:text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
                    Learn More &gt;

                </div>
            </div>

            <div 
            style={{backgroundImage:`url(${image})`}}
            className="w-full group relative h-full flip-card-back bg-cover bg-center rounded-lg p-4">
                <div
                className="absolute inset-0 w-full h-full rounded-md bg-black opacity-80 z-[-1]"
                />
                <div className="flex flex-col gap-20 py-3 z-[30]">
                    <h1 className="text-white md:text-2xl  text-1.5xl font-semibold">{title}</h1>
                    <p className="invisible md:visible text-gray-200 text-[10px] md:text-[16px]">{text}</p>
                </div>
            </div>



      </motion.div>
    </div>
  )
}

export default ProjectCard

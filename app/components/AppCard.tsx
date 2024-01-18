"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'

interface Props{
    image:string;
    title:string;
    text:string;
}

const AppCard = ({image,title,text}:Props) => {
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
    className="h-[200px] w-[100px] md:w-[200px] md:h-[440px] rounded-md cursor-pointer md:m-4">
      <motion.div
      className='flip-card-inner w-full h-full'
      initial={false}
      animate={{rotateY: isFlipped ? 180 : 360}}
      transition={{duration:0.6,animationDuration:"normal"}}
      onAnimationComplete={()=>setIsAnimating(false)}
        >
          
            <div 
            style={{backgroundImage:`url(${image})`}}
            className='w-full group relative h-full flip-card-front bg-cover bg-no-repeat bg-center border border-purple-300 rounded-lg'>
                <div
                className='absolute w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'
                />
                <div className='absolute  w-full h-full text-[20px] hidden group-hover:flex items-center z-[20] justify-center'>
                    Learn More &gt;

                </div>
            </div>

            <div 
            style={{backgroundImage:`url(${image})`}}
            className='w-full group relative h-full flip-card-back bg-cover bg-center rounded-lg p-4'>
                <div
                className='absolute inset-0 w-full h-full rounded-md bg-black opacity-80 z-[-1]'
                />
                <div className='flex flex-col gap-20 py-3 z-[30]'>
                    <h1 className='text-white text-2xl font-semibold'>{title}</h1>
                    <p className='invisible md:visible text-gray-200 text-[16px]'>{text}</p>
                </div>
            </div>



      </motion.div>
    </div>
  )
}

export default AppCard

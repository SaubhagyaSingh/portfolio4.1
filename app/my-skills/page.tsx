"use client"

import React from "react"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import { SkillData } from "../constants/index"
import Image from "next/image"
import {Autoplay} from "swiper/modules"

const Page = () => {
  return (
    <div 
    style={{backgroundImage:"url(/bg2.webp"}}
    className="z-[1] h-screen w-screen items-center justify-center bg-cover bg-center">
      
      <div className=" flex flex-col gap-10 md:gap-20 max-w-[100%] text-center items-center">
        <div className="flex flex-col justify-center text-center items-center gap-4 mt-24">
        <h1 className="font-semibold text-white text-[50px]">Skills
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
             {" "} 
             &{" "} 
            </span>
            Technologies
            </h1>
            <p className="text-white text-transparent bg-clip-text bg-gradient">
              Using the Latest Tech this world has to offer
            </p>
        </div>
        <Swiper
        
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay:0,
            disableOnInteraction:false
          }}

          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill,index)=>(
            <SwiperSlide key={index}>
              <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              />
            </SwiperSlide>
          ))}

        </Swiper>

        <Swiper
        
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay:0,
            disableOnInteraction:false,
            reverseDirection:true,  
          }}

          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill,index)=>(
            <SwiperSlide key={index}>
              <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  )
}

export default Page

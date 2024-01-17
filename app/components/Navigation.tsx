"use client"
import { NavLinks } from "@/app/constants"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import Link from "next/link";
import Transitions from "./Transitions";
const Navigation = () => {
const [isRouting,setIsRouting]=useState(false)
const path= usePathname()
const [isActive,setIsActive]=useState(path)
const [prevPath,setPrevPath]=useState("/")

useEffect(()=>{
    if(prevPath!==path){
        setIsRouting(true)
    }
},[path,prevPath])

useEffect(()=>{
    if (isRouting){
        setPrevPath(path);
        const timeout = setTimeout(()=>{
            setIsRouting(false)
        },1200)
    
        return()=>clearTimeout(timeout)
    
    }
},[isRouting])

    return (
    <div className="px-2 py-2 pt-4 mr-4 absolute z-[100] -bottom-5 max-h-[95px] max-w-[240px] md:-bottom-20 w-[100%] md:w-[20%] md:max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white md:px-4 md:py-7" style={{left:"20%"}}>

      {isRouting && <Transitions/>}
      {NavLinks.map((nav)=>(
        <Link
        href={nav.link}
        key={nav.name}
        className="mb-16 pl-4 min-w-[20%]"
       >
      <nav.icon className={`w-[24px] h-[24px] ${path===nav.name ? "text-purple-800":"text-white"}`}/>
       
        </Link>    
      )
      )}
    </div>
  )
}

export default Navigation

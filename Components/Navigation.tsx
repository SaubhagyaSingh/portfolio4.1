"use client"
import { NavLinks } from "@/constants"
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
    <div className="z-[100] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7" style={{left:"20%"}}>

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

"use client"


import Image from "next/image";
import React from "react";
const Page = () => {
  return (

    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="z-[1] w-screen h-screen flex flex-row bg-center bg-cover"
    >
         <div className="flex-1 flex items-center justify-center mb-8">
        <Image
          src="/me1.jpg"
          alt="horse"
          height={400}
          width={400}
          className="rounded-full border-4 border-white bg-cover bg-center"
          />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-2">
        <h1 className="font-semibold text-white text-4xl mb-12 mr-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            About Me
          </span>
        </h1>
        <p className="text-white w-full md:w-[80%] text-[18px] justify-items-center">
          Hello, I am Saubhagya Singh, a driven and ambitious Computer Science
          Engineering student in my third year at MIT-WPU College. With a
          relentless passion for technology and a commitment to excellence, I
          have been on a transformative journey in the world of computer
          science. My portfolio is a reflection of my dedication to innovation,
          problem-solving, and my continuous quest to expand my knowledge and
          skills. Join me as I showcase my academic and extracurricular
          achievements, projects, and the exciting ventures I have undertaken on
          my path to becoming a well-rounded computer scientist.
        </p>
        <div className="pt-12 gap-4 pr-2  mr-2">
            <a
              href="mailto:saubhagyasingh65@gmail.com?subject="
              className="mr-2 group relative rounded-[20px] border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Gmail 
            </a>

            <a
              href="https://www.hackerrank.com/profile/SaubhagyaSingh"
              className="  mr-2 group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Hackerank
            </a>

            <a
              href="https://www.codechef.com/users/saubhagya65"
              className=" mr-2 group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              CodeChef
            </a>
            <a
              href="https://github.com/SaubhagyaSingh"
              className="mr-2 group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Github
            </a>
            <a
              href="https://www.chess.com/stats/overview/saubhi65/0?"
              className=" mr-2 group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Chess
            </a>
          </div>
      </div>
     
    </div>
  );
};

export default Page;

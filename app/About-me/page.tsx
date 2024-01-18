"use client"

import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="z-[1] w-screen h-screen flex flex-col md:flex-row bg-center bg-cover overflow-x-hidden"
    >
     
      <div className="md:flex-1 flex flex-col items-center justify-center p-2">
      <div className=" mt-16 w-[150px] h-[150px] md:flex-1 flex items-center justify-center md:mb-8">
        <Image
          src="/me1.jpg"
          alt="my pfp"
          height={400}
          width={400}
          className="rounded-full border-4 border-white bg-cover bg-center"
        />
      </div>
        <h1 className="font-semibold text-white md:text-4xl text-2xl md:mb-12 md:mr-16">
          <span className="mt-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            About Me
          </span>
        </h1>
        <p className="mt-16   text-white w-[90%] text-[16px] md:text-[18px]">
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-2 md:gap-4 gap-2">
  <a
    href="mailto:saubhagyasingh65@gmail.com?subject="
    className="group relative rounded-[20px] border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
  >
    Gmail
  </a>

  <a
    href="https://www.hackerrank.com/profile/SaubhagyaSingh"
    className="group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
  >
    Hackerank
  </a>

  <a
    href="https://www.codechef.com/users/saubhagya65"
    className="group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
  >
    CodeChef
  </a>

  <a
    href="https://github.com/SaubhagyaSingh"
    className="group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
  >
    Github
  </a>

  <a
    href="https://www.chess.com/stats/overview/saubhi65/0?"
    className="group relative rounded-[20px] border border-white bg-transparent hover:bg-blue-400 px-5 py-3 text-lg mb-24 text-white max-w-[200px]"
  >
    Chess
  </a>
</div>

      </div>
     
    </div>
  );
};

export default Page;

import AppCard from "@/Components/AppCard";
import { AppProjects } from "@/constants";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen h-screen flex flex-row bg-center bg-cover"
    >
         <div className="flex-1 flex items-center justify-center">
        <Image
          src="/pfp.png"
          alt="horse"
          height={300}
          width={300}
          className="rounded-full border-4 border-white"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-2">
        <h1 className="font-semibold text-white text-4xl mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            About Me
          </span>
        </h1>
        <p className="text-white w-full md:w-[80%]">
          Hello, I am Saubhagya Singh, a driven and ambitious Computer Science
          Engineering student in my third year at MIT-WPU College. With a
          relentless passion for technology and a commitment to excellence, I
          have been on a transformative journey in the world of computer
          science. My portfolio is a reflection of my dedication to innovation,
          problem-solving, and my continuous quest to expand my knowledge and
          skills. Join me as I showcase my academic and extracurricular
          achievements, projects, and the exciting ventures I've undertaken on
          my path to becoming a well-rounded computer scientist.
        </p>
      </div>
     
    </div>
  );
};

export default Page;

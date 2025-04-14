"use client";
import AppCard from "../components/AppCard";
import { AppProjects } from "../constants/index";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.webp)" }}
      className="z-[1] w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover px-4"
    >
      {/* Title Section */}
      <div className="mt-6">
      <h1 className="font-semibold text-white text-[28px] sm:text-[30px] md:text-[40px] leading-none mb-8 text-center">
        APP
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          DEV
        </span>
      </h1>
      </div>

      {/* Projects Grid */}
      <div className="w-full overflow-x-auto sm:overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[1200px] mx-auto">
          {AppProjects.map((project, index) => (
            <AppCard
              key={index}
              text={project.text}
              title={project.title}
              image={project.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

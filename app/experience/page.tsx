"use client";
import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { Experience } from "../constants/index";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="min-h-screen flex flex-col items-center bg-center bg-cover text-white"
    >
      <div className="mt-16 mb-10 text-center">
        <h1 className="text-[32px] md:text-[50px] font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-300">
            Experiences
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-10 justify-center px-4 pb-20">
        {Experience.map((company, index) => (
          <ExperienceCard key={index} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Page;

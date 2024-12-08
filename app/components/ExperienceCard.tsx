"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import Image from "next/image";

interface Company {
  name: string;
  imagePath: string;
  techStack: string[];
  work: string[];
}

interface ExperienceCardProps {
  company: Company;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company }) => {
  const { name, imagePath, techStack, work } = company;

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-auto h-[32rem] perspective cursor-pointer group hover:scale-105 transform transition-transform duration-500"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={` w-[28rem] h-auto transition-transform duration-700`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Card Front */}
        <div
          className="h-auto bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-2xl shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="p-10">
            {/* Logo and Company Name */}
            <div className="flex items-center mb-6">
              <div className="relative w-24 h-24 overflow-hidden rounded-full border-2 border-gray-300 shadow-md">
                <Image
                  src={imagePath}
                  alt={`${name} logo`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h2 className="ml-6 text-3xl font-bold text-gray-800">{name}</h2>
            </div>

            {/* Work Details */}
            <div>
              <h3 className="text-lg font-semibold text-indigo-500">
                Key Contributions
              </h3>
              <ul className="mt-4 text-sm text-gray-700 list-inside space-y-3">
                {work.map((task, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="mt-1 text-indigo-500">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Card Back */}
        <div
          className="absolute inset-0 w-full h-full bg-purple-700 text-white rounded-2xl shadow-xl"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="relative flex items-center justify-center h-full p-8">
            <h3 className="absolute top-8 text-2xl font-bold">Tech Stack</h3>
            <div className="relative w-full h-full flex justify-center items-center space-x-2">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="relative w-16 h-16 p-3 bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition-transform transform scale-100 hover:scale-125"
                >
                  <Image
                    src={`/${tech.toLowerCase()}.png`} // Ensure these images exist in `/public/tech/`
                    alt={tech}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

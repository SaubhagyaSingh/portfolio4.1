"use client";
import React from "react";
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
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <div
      className="w-[320px] h-[450px] perspective-[1000px] cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-black/80 text-white rounded-xl p-5 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center mb-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
              <Image
                src={company.imagePath}
                alt={company.name}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
            </div>
            <h2 className="ml-4 text-xl font-bold text-purple-300">{company.name}</h2>
          </div>
          <h3 className="text-purple-400 font-semibold mb-2">Key Contributions</h3>
          <ul className="text-sm text-gray-300 space-y-2 overflow-hidden">
            {company.work.length > 0 ? (
              company.work.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-purple-400">•</span>
                  {item}
                </li>
              ))
            ) : (
              <li>No contributions listed</li>
            )}
          </ul>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-purple-900 to-black text-white rounded-xl p-5 rotate-y-180 backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-center text-purple-300 font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 overflow-hidden">
            {company.techStack.length > 0 ? (
              company.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden"
                  title={tech}
                >
                  <Image
                    src={`/tech/${tech.toLowerCase()}.png`}
                    alt={tech}
                    fill
                    className="object-contain"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No tech listed</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

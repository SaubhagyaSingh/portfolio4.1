"use client";

import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.webp)" }}
      className="w-screen min-h-screen bg-center bg-cover flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
    >
      {/* Profile Image */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4 sm:mb-6">
        <Image
          src="/me1.webp"
          alt="Saubhagya Singh"
          fill
          className="rounded-full border-4 border-white object-cover"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          About Me
        </span>
      </h1>

      {/* Bio */}
      <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg text-center leading-relaxed mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl">
        Hello, I am Saubhagya Singh, a driven and ambitious Computer Science
        Engineering student in my fourth year at MIT-WPU College. With a
        relentless passion for technology and a commitment to excellence, I have
        been on a transformative journey in the world of computer science. My
        portfolio reflects my dedication to innovation, problem-solving, and my
        continuous quest to expand my knowledge and skills.
      </p>

      {/* Social Links */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
        {[
          { href: "mailto:saubhagyasingh65@gmail.com?subject=", label: "Gmail" },
          { href: "https://www.hackerrank.com/profile/SaubhagyaSingh", label: "HackerRank" },
          { href: "https://github.com/SaubhagyaSingh", label: "GitHub" },
          { href: "https://www.chess.com/stats/overview/saubhi65/0?", label: "Chess" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="relative rounded-lg border border-white/50 bg-transparent hover:bg-blue-500/30 text-white text-xs sm:text-sm md:text-base font-medium text-center py-2 sm:py-3 transition-all duration-300 ease-in-out"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Page;
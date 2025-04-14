"use client";
import { NavLinks } from "@/app/constants";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Transitions from "./Transitions";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [pendingPath, setPendingPath] = useState(null);
  const path = usePathname();
  const router = useRouter();
  const [prevPath, setPrevPath] = useState("/");

  // Handle initial load to skip transition
  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }
  }, [isInitialLoad]);

  // Handle animation and navigation
  useEffect(() => {
    if (isRouting && pendingPath) {
      const enterTimeout = setTimeout(() => {
        router.push(pendingPath);
      }, 400); // Matches Transitions animate duration (0.4s)

      const exitTimeout = setTimeout(() => {
        setIsRouting(false);
        setPendingPath(null);
      }, 700); // Total: 0.4s (enter) + 0.3s (exit)

      return () => {
        clearTimeout(enterTimeout);
        clearTimeout(exitTimeout);
      };
    }
  }, [isRouting, pendingPath, router]);

  // Update prevPath after navigation
  useEffect(() => {
    if (prevPath !== path && !isInitialLoad) {
      setPrevPath(path);
    }
  }, [path, prevPath, isInitialLoad]);

  const handleNavClick = (e:any, link:any) => {
    e.preventDefault();
    if (link !== path && !isRouting) {
      setPendingPath(link);
      setIsRouting(true);
    }
  };

  return (
    <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[400px] mx-auto">
      {isRouting && <Transitions />}
      <div className="flex items-center justify-between px-2 py-2 bg-black/90 backdrop-blur-sm rounded-xl shadow-lg border border-purple-900/50 transition-all duration-300 hover:shadow-purple-900/20">
        <div className="flex items-center justify-around w-full gap-1">
          {NavLinks.map((nav) => (
            <Link
              href={nav.link}
              key={nav.name}
              onClick={(e) => handleNavClick(e, nav.link)}
              className="flex flex-col items-center justify-center p-1.5 rounded-lg hover:bg-purple-900/30 transition-colors duration-200 group"
            >
              <nav.icon
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200 ${
                  path === nav.link ? "text-purple-400" : "text-gray-300"
                } group-hover:text-purple-300`}
              />
              <span
                className={`text-[10px] sm:text-xs mt-0.5 transition-colors duration-200 ${
                  path === nav.link ? "text-purple-400" : "text-gray-300"
                } group-hover:text-purple-300 hidden sm:block`}
              >
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
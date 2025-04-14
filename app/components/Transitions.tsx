"use client";
import React from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

const TransitionVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1.5,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const Transitions = () => {
  if (typeof window === "undefined") return null;

  return createPortal(
    <motion.div
      className="fixed top-0 left-0 h-screen w-screen z-[1000] bg-gradient-to-br from-purple-600 to-black"
      style={{
        clipPath: "circle(100% at 50% 50%)",
        transformOrigin: "center",
      }}
      variants={TransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    />,
    document.body
  );
};

export default Transitions;
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  image: string;
  title: string;
  text: string;
}

const AppCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-full sm:w-[200px] md:w-[250px] lg:w-[280px] h-[250px] sm:h-[300px] md:h-[350px] rounded-md cursor-pointer m-2"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front of the card */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full flip-card-front bg-no-repeat bg-contain bg-center rounded-lg"
        >
          <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-40 rounded-lg" />
          <div className="absolute text-white text-[16px] sm:text-[18px] md:text-[20px] hidden group-hover:flex items-center justify-center z-[20]">
            Learn More &gt;
          </div>
        </div>

        {/* Back of the card */}
        <div
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundPosition: 'center' }}
          className="w-full h-full flip-card-back bg-no-repeat bg-center rounded-lg"
        >
          <div className="absolute inset-0 w-full h-full bg-black opacity-80 z-[-1]" />
          <div className="flex flex-col gap-2 py-3 px-2 z-[30]">
            <h1 className="text-white text-[18px] sm:text-[20px] md:text-[22px] font-semibold">{title}</h1>
            <p className="text-gray-200 text-[12px] sm:text-[14px] md:text-[16px]">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppCard;

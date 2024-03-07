import clsx from "clsx";
import React from "react";
import { cn } from '@/utils/cn';

export const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={clsx(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-[#FF2E00] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#FF2E00] before:to-transparent",
            className
          )}
          style={{
            top: `0px`,
            left: `${Math.floor(Math.random() * (1000 - -400) + -400)}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (20 - 2) + 2)}s`,
          }}
        ></span>
      ))}
    </>
  );
};

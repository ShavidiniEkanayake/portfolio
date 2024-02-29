import React from 'react';

import { TypewriterEffectSmooth } from './core/typewriter-effect';

export const Splash = () => {
  const words = [
    {
      text: "Shavidini",
    },
    {
      text: "Ekanayake",
    },
    {
      text: "is",
      className: "text-orange font-SatoshiItalic font-bold",
    },
    {
      text: "a",
    }
  ];

  return (
    <div className="flex items-center justify-center h-screen">

      <TypewriterEffectSmooth words={words} className={"flex items-center justify-center h-screen"}/>

    </div>
  );
};
